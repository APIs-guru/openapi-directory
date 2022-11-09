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
    DescribeRecommendationExportJobs(req: operations.DescribeRecommendationExportJobsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRecommendationExportJobsResponse>;
    ExportAutoScalingGroupRecommendations(req: operations.ExportAutoScalingGroupRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportAutoScalingGroupRecommendationsResponse>;
    ExportEbsVolumeRecommendations(req: operations.ExportEbsVolumeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportEbsVolumeRecommendationsResponse>;
    ExportEc2InstanceRecommendations(req: operations.ExportEc2InstanceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportEc2InstanceRecommendationsResponse>;
    ExportLambdaFunctionRecommendations(req: operations.ExportLambdaFunctionRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportLambdaFunctionRecommendationsResponse>;
    GetAutoScalingGroupRecommendations(req: operations.GetAutoScalingGroupRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetAutoScalingGroupRecommendationsResponse>;
    GetEbsVolumeRecommendations(req: operations.GetEbsVolumeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEbsVolumeRecommendationsResponse>;
    GetEc2InstanceRecommendations(req: operations.GetEc2InstanceRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEc2InstanceRecommendationsResponse>;
    GetEc2RecommendationProjectedMetrics(req: operations.GetEc2RecommendationProjectedMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetEc2RecommendationProjectedMetricsResponse>;
    GetEnrollmentStatus(req: operations.GetEnrollmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrollmentStatusResponse>;
    GetEnrollmentStatusesForOrganization(req: operations.GetEnrollmentStatusesForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.GetEnrollmentStatusesForOrganizationResponse>;
    GetLambdaFunctionRecommendations(req: operations.GetLambdaFunctionRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLambdaFunctionRecommendationsResponse>;
    GetRecommendationSummaries(req: operations.GetRecommendationSummariesRequest, config?: AxiosRequestConfig): Promise<operations.GetRecommendationSummariesResponse>;
    UpdateEnrollmentStatus(req: operations.UpdateEnrollmentStatusRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEnrollmentStatusResponse>;
}
export {};
