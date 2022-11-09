import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateFhirDatastore(req: operations.CreateFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateFhirDatastoreResponse>;
    DeleteFhirDatastore(req: operations.DeleteFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFhirDatastoreResponse>;
    DescribeFhirDatastore(req: operations.DescribeFhirDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirDatastoreResponse>;
    DescribeFhirExportJob(req: operations.DescribeFhirExportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirExportJobResponse>;
    DescribeFhirImportJob(req: operations.DescribeFhirImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFhirImportJobResponse>;
    ListFhirDatastores(req: operations.ListFhirDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirDatastoresResponse>;
    ListFhirExportJobs(req: operations.ListFhirExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirExportJobsResponse>;
    ListFhirImportJobs(req: operations.ListFhirImportJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListFhirImportJobsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    StartFhirExportJob(req: operations.StartFhirExportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFhirExportJobResponse>;
    StartFhirImportJob(req: operations.StartFhirImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartFhirImportJobResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
export {};
