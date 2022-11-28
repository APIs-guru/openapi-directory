import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://app-integrations.{region}.amazonaws.com", "https://app-integrations.{region}.amazonaws.com", "http://app-integrations.{region}.amazonaws.com.cn", "https://app-integrations.{region}.amazonaws.com.cn"];
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
     * createEventIntegration - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
    **/
    createEventIntegration(req: operations.CreateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventIntegrationResponse>;
    /**
     * deleteEventIntegration - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
    **/
    deleteEventIntegration(req: operations.DeleteEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventIntegrationResponse>;
    /**
     * getEventIntegration - Return information about the event integration.
    **/
    getEventIntegration(req: operations.GetEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetEventIntegrationResponse>;
    /**
     * listEventIntegrationAssociations - Returns a paginated list of event integration associations in the account.
    **/
    listEventIntegrationAssociations(req: operations.ListEventIntegrationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationAssociationsResponse>;
    /**
     * listEventIntegrations - Returns a paginated list of event integrations in the account.
    **/
    listEventIntegrations(req: operations.ListEventIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationsResponse>;
    /**
     * listTagsForResource - Lists the tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * tagResource - Adds the specified tags to the specified resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the specified tags from the specified resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateEventIntegration - Updates the description of an event integration.
    **/
    updateEventIntegration(req: operations.UpdateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventIntegrationResponse>;
}
export {};
