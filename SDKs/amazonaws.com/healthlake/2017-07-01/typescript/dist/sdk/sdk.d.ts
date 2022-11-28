import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://healthlake.{region}.amazonaws.com", "https://healthlake.{region}.amazonaws.com", "http://healthlake.{region}.amazonaws.com.cn", "https://healthlake.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createFhirDatastore - Creates a Data Store that can ingest and export FHIR formatted data.
    **/
    createFhirDatastore(req: operations.CreateFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateFhirDatastoreResponse>;
    /**
     * deleteFhirDatastore - Deletes a Data Store.
    **/
    deleteFhirDatastore(req: operations.DeleteFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFhirDatastoreResponse>;
    /**
     * describeFhirDatastore - Gets the properties associated with the FHIR Data Store, including the Data Store ID, Data Store ARN, Data Store name, Data Store status, created at, Data Store type version, and Data Store endpoint.
    **/
    describeFhirDatastore(req: operations.DescribeFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirDatastoreResponse>;
    /**
     * describeFhirExportJob - Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.
    **/
    describeFhirExportJob(req: operations.DescribeFhirExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirExportJobResponse>;
    /**
     * describeFhirImportJob - Displays the properties of a FHIR import job, including the ID, ARN, name, and the status of the job.
    **/
    describeFhirImportJob(req: operations.DescribeFhirImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirImportJobResponse>;
    /**
     * listFhirDatastores - Lists all FHIR Data Stores that are in the user’s account, regardless of Data Store status.
    **/
    listFhirDatastores(req: operations.ListFhirDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirDatastoresResponse>;
    /**
     * listFhirExportJobs -  Lists all FHIR export jobs associated with an account and their statuses.
    **/
    listFhirExportJobs(req: operations.ListFhirExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirExportJobsResponse>;
    /**
     * listFhirImportJobs -  Lists all FHIR import jobs associated with an account and their statuses.
    **/
    listFhirImportJobs(req: operations.ListFhirImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirImportJobsResponse>;
    /**
     * listTagsForResource -  Returns a list of all existing tags associated with a Data Store.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startFhirExportJob - Begins a FHIR export job.
    **/
    startFhirExportJob(req: operations.StartFhirExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFhirExportJobResponse>;
    /**
     * startFhirImportJob - Begins a FHIR Import job.
    **/
    startFhirImportJob(req: operations.StartFhirImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFhirImportJobResponse>;
    /**
     * tagResource -  Adds a user specifed key and value tag to a Data Store.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Removes tags from a Data Store.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
