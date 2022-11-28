import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://applicationinsights.{region}.amazonaws.com", "https://applicationinsights.{region}.amazonaws.com", "http://applicationinsights.{region}.amazonaws.com.cn", "https://applicationinsights.{region}.amazonaws.com.cn"];
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
     * createApplication - Adds an application that is created from a resource group.
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * createComponent - Creates a custom component by grouping similar standalone instances to monitor.
    **/
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * createLogPattern - Adds an log pattern to a <code>LogPatternSet</code>.
    **/
    createLogPattern(req: operations.CreateLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.CreateLogPatternResponse>;
    /**
     * deleteApplication - Removes the specified application from monitoring. Does not delete the application.
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * deleteComponent - Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.
    **/
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * deleteLogPattern - Removes the specified log pattern from a <code>LogPatternSet</code>.
    **/
    deleteLogPattern(req: operations.DeleteLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLogPatternResponse>;
    /**
     * describeApplication - Describes the application.
    **/
    describeApplication(req: operations.DescribeApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicationResponse>;
    /**
     * describeComponent - Describes a component and lists the resources that are grouped together in a component.
    **/
    describeComponent(req: operations.DescribeComponentRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentResponse>;
    /**
     * describeComponentConfiguration - Describes the monitoring configuration of the component.
    **/
    describeComponentConfiguration(req: operations.DescribeComponentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentConfigurationResponse>;
    /**
     * describeComponentConfigurationRecommendation - Describes the recommended monitoring configuration of the component.
    **/
    describeComponentConfigurationRecommendation(req: operations.DescribeComponentConfigurationRecommendationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeComponentConfigurationRecommendationResponse>;
    /**
     * describeLogPattern - Describe a specific log pattern from a <code>LogPatternSet</code>.
    **/
    describeLogPattern(req: operations.DescribeLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLogPatternResponse>;
    /**
     * describeObservation - Describes an anomaly or error with the application.
    **/
    describeObservation(req: operations.DescribeObservationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeObservationResponse>;
    /**
     * describeProblem - Describes an application problem.
    **/
    describeProblem(req: operations.DescribeProblemRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProblemResponse>;
    /**
     * describeProblemObservations - Describes the anomalies or errors associated with the problem.
    **/
    describeProblemObservations(req: operations.DescribeProblemObservationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProblemObservationsResponse>;
    /**
     * listApplications - Lists the IDs of the applications that you are monitoring.
    **/
    listApplications(req: operations.ListApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationsResponse>;
    /**
     * listComponents - Lists the auto-grouped, standalone, and custom components of the application.
    **/
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * listConfigurationHistory - <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>
    **/
    listConfigurationHistory(req: operations.ListConfigurationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationHistoryResponse>;
    /**
     * listLogPatternSets - Lists the log pattern sets in the specific application.
    **/
    listLogPatternSets(req: operations.ListLogPatternSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListLogPatternSetsResponse>;
    /**
     * listLogPatterns - Lists the log patterns in the specific log <code>LogPatternSet</code>.
    **/
    listLogPatterns(req: operations.ListLogPatternsRequest, config?: AxiosRequestConfig): Promise<operations.ListLogPatternsResponse>;
    /**
     * listProblems - Lists the problems with your application.
    **/
    listProblems(req: operations.ListProblemsRequest, config?: AxiosRequestConfig): Promise<operations.ListProblemsResponse>;
    /**
     * listTagsForResource - Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Remove one or more tags (keys and values) from a specified application.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateApplication - Updates the application.
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * updateComponent - Updates the custom component name and/or the list of resources that make up the component.
    **/
    updateComponent(req: operations.UpdateComponentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentResponse>;
    /**
     * updateComponentConfiguration - Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>.
    **/
    updateComponentConfiguration(req: operations.UpdateComponentConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateComponentConfigurationResponse>;
    /**
     * updateLogPattern - Adds a log pattern to a <code>LogPatternSet</code>.
    **/
    updateLogPattern(req: operations.UpdateLogPatternRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLogPatternResponse>;
}
export {};
