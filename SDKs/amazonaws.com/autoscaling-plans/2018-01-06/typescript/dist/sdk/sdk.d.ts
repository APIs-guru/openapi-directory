import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://autoscaling-plans.{region}.amazonaws.com", "https://autoscaling-plans.{region}.amazonaws.com", "http://autoscaling-plans.{region}.amazonaws.com.cn", "https://autoscaling-plans.{region}.amazonaws.com.cn"];
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
     * createScalingPlan - Creates a scaling plan.
    **/
    createScalingPlan(req: operations.CreateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateScalingPlanResponse>;
    /**
     * deleteScalingPlan - <p>Deletes the specified scaling plan.</p> <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for all of the scalable resources that are covered by the plan.</p> <p>If the plan has launched resources or has scaling activities in progress, you must delete those resources separately.</p>
    **/
    deleteScalingPlan(req: operations.DeleteScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteScalingPlanResponse>;
    /**
     * describeScalingPlanResources - Describes the scalable resources in the specified scaling plan.
    **/
    describeScalingPlanResources(req: operations.DescribeScalingPlanResourcesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlanResourcesResponse>;
    /**
     * describeScalingPlans - Describes one or more of your scaling plans.
    **/
    describeScalingPlans(req: operations.DescribeScalingPlansRequest, config?: AxiosRequestConfig): Promise<operations.DescribeScalingPlansResponse>;
    /**
     * getScalingPlanResourceForecastData - <p>Retrieves the forecast data for a scalable resource.</p> <p>Capacity forecasts are represented as predicted values, or data points, that are calculated using historical data points from a specified CloudWatch load metric. Data points are available for up to 56 days. </p>
    **/
    getScalingPlanResourceForecastData(req: operations.GetScalingPlanResourceForecastDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScalingPlanResourceForecastDataResponse>;
    /**
     * updateScalingPlan - <p>Updates the specified scaling plan.</p> <p>You cannot update a scaling plan if it is in the process of being created, updated, or deleted.</p>
    **/
    updateScalingPlan(req: operations.UpdateScalingPlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateScalingPlanResponse>;
}
export {};
