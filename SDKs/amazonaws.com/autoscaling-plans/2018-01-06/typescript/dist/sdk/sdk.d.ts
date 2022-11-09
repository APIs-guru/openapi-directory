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
    CreateScalingPlan(req: operations.CreateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateScalingPlanResponse>;
    DeleteScalingPlan(req: operations.DeleteScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScalingPlanResponse>;
    DescribeScalingPlanResources(req: operations.DescribeScalingPlanResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlanResourcesResponse>;
    DescribeScalingPlans(req: operations.DescribeScalingPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlansResponse>;
    GetScalingPlanResourceForecastData(req: operations.GetScalingPlanResourceForecastDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScalingPlanResourceForecastDataResponse>;
    UpdateScalingPlan(req: operations.UpdateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScalingPlanResponse>;
}
export {};
