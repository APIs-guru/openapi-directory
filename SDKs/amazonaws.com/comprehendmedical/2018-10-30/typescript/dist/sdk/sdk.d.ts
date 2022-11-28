import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://comprehendmedical.{region}.amazonaws.com", "https://comprehendmedical.{region}.amazonaws.com", "http://comprehendmedical.{region}.amazonaws.com.cn", "https://comprehendmedical.{region}.amazonaws.com.cn"];
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
     * describeEntitiesDetectionV2Job - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
    **/
    describeEntitiesDetectionV2Job(req: operations.DescribeEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntitiesDetectionV2JobResponse>;
    /**
     * describeIcd10CmInferenceJob - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
    **/
    describeIcd10CmInferenceJob(req: operations.DescribeIcd10CmInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIcd10CmInferenceJobResponse>;
    /**
     * describePhiDetectionJob - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
    **/
    describePhiDetectionJob(req: operations.DescribePhiDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribePhiDetectionJobResponse>;
    /**
     * describeRxNormInferenceJob - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
    **/
    describeRxNormInferenceJob(req: operations.DescribeRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRxNormInferenceJobResponse>;
    /**
     * detectEntities - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
    **/
    detectEntities(req: operations.DetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesResponse>;
    /**
     * detectEntitiesV2 - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
    **/
    detectEntitiesV2(req: operations.DetectEntitiesV2Request, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesV2Response>;
    /**
     * detectPhi -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
    **/
    detectPhi(req: operations.DetectPhiRequest, config?: AxiosRequestConfig): Promise<operations.DetectPhiResponse>;
    /**
     * inferIcd10Cm - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts.
    **/
    inferIcd10Cm(req: operations.InferIcd10CmRequest, config?: AxiosRequestConfig): Promise<operations.InferIcd10CmResponse>;
    /**
     * inferRxNorm - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts.
    **/
    inferRxNorm(req: operations.InferRxNormRequest, config?: AxiosRequestConfig): Promise<operations.InferRxNormResponse>;
    /**
     * listEntitiesDetectionV2Jobs - Gets a list of medical entity detection jobs that you have submitted.
    **/
    listEntitiesDetectionV2Jobs(req: operations.ListEntitiesDetectionV2JobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesDetectionV2JobsResponse>;
    /**
     * listIcd10CmInferenceJobs - Gets a list of InferICD10CM jobs that you have submitted.
    **/
    listIcd10CmInferenceJobs(req: operations.ListIcd10CmInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListIcd10CmInferenceJobsResponse>;
    /**
     * listPhiDetectionJobs - Gets a list of protected health information (PHI) detection jobs that you have submitted.
    **/
    listPhiDetectionJobs(req: operations.ListPhiDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListPhiDetectionJobsResponse>;
    /**
     * listRxNormInferenceJobs - Gets a list of InferRxNorm jobs that you have submitted.
    **/
    listRxNormInferenceJobs(req: operations.ListRxNormInferenceJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListRxNormInferenceJobsResponse>;
    /**
     * startEntitiesDetectionV2Job - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
    **/
    startEntitiesDetectionV2Job(req: operations.StartEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.StartEntitiesDetectionV2JobResponse>;
    /**
     * startIcd10CmInferenceJob - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
    **/
    startIcd10CmInferenceJob(req: operations.StartIcd10CmInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StartIcd10CmInferenceJobResponse>;
    /**
     * startPhiDetectionJob - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
    **/
    startPhiDetectionJob(req: operations.StartPhiDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartPhiDetectionJobResponse>;
    /**
     * startRxNormInferenceJob - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
    **/
    startRxNormInferenceJob(req: operations.StartRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StartRxNormInferenceJobResponse>;
    /**
     * stopEntitiesDetectionV2Job - Stops a medical entities detection job in progress.
    **/
    stopEntitiesDetectionV2Job(req: operations.StopEntitiesDetectionV2JobRequest, config?: AxiosRequestConfig): Promise<operations.StopEntitiesDetectionV2JobResponse>;
    /**
     * stopIcd10CmInferenceJob - Stops an InferICD10CM inference job in progress.
    **/
    stopIcd10CmInferenceJob(req: operations.StopIcd10CmInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StopIcd10CmInferenceJobResponse>;
    /**
     * stopPhiDetectionJob - Stops a protected health information (PHI) detection job in progress.
    **/
    stopPhiDetectionJob(req: operations.StopPhiDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopPhiDetectionJobResponse>;
    /**
     * stopRxNormInferenceJob - Stops an InferRxNorm inference job in progress.
    **/
    stopRxNormInferenceJob(req: operations.StopRxNormInferenceJobRequest, config?: AxiosRequestConfig): Promise<operations.StopRxNormInferenceJobResponse>;
}
export {};
