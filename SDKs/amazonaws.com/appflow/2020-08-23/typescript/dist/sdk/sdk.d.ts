import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://appflow.{region}.amazonaws.com", "https://appflow.{region}.amazonaws.com", "http://appflow.{region}.amazonaws.com.cn", "https://appflow.{region}.amazonaws.com.cn"];
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
     * createConnectorProfile -  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel.
    **/
    createConnectorProfile(req: operations.CreateConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorProfileResponse>;
    /**
     * createFlow -  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.
    **/
    createFlow(req: operations.CreateFlowRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlowResponse>;
    /**
     * deleteConnectorProfile -  Enables you to delete an existing connector profile.
    **/
    deleteConnectorProfile(req: operations.DeleteConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorProfileResponse>;
    /**
     * deleteFlow -  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.
    **/
    deleteFlow(req: operations.DeleteFlowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowResponse>;
    /**
     * describeConnectorEntity -  Provides details regarding the entity used with the connector, with a description of the data model for each entity.
    **/
    describeConnectorEntity(req: operations.DescribeConnectorEntityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorEntityResponse>;
    /**
     * describeConnectorProfiles - <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
    **/
    describeConnectorProfiles(req: operations.DescribeConnectorProfilesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorProfilesResponse>;
    /**
     * describeConnectors -  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
    **/
    describeConnectors(req: operations.DescribeConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorsResponse>;
    /**
     * describeFlow -  Provides a description of the specified flow.
    **/
    describeFlow(req: operations.DescribeFlowRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlowResponse>;
    /**
     * describeFlowExecutionRecords -  Fetches the execution history of the flow.
    **/
    describeFlowExecutionRecords(req: operations.DescribeFlowExecutionRecordsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlowExecutionRecordsResponse>;
    /**
     * listConnectorEntities -  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
    **/
    listConnectorEntities(req: operations.ListConnectorEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorEntitiesResponse>;
    /**
     * listFlows -  Lists all of the flows associated with your account.
    **/
    listFlows(req: operations.ListFlowsRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowsResponse>;
    /**
     * listTagsForResource -  Retrieves the tags that are associated with a specified flow.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * startFlow -  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.
    **/
    startFlow(req: operations.StartFlowRequest, config?: AxiosRequestConfig): Promise<operations.StartFlowResponse>;
    /**
     * stopFlow -  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow.
    **/
    stopFlow(req: operations.StopFlowRequest, config?: AxiosRequestConfig): Promise<operations.StopFlowResponse>;
    /**
     * tagResource -  Applies a tag to the specified flow.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Removes a tag from the specified flow.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateConnectorProfile -  Updates a given connector profile associated with your account.
    **/
    updateConnectorProfile(req: operations.UpdateConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorProfileResponse>;
    /**
     * updateFlow -  Updates an existing flow.
    **/
    updateFlow(req: operations.UpdateFlowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlowResponse>;
}
export {};
