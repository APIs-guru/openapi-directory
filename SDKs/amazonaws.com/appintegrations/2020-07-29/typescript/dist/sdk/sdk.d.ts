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
    CreateEventIntegration(req: operations.CreateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventIntegrationResponse>;
    DeleteEventIntegration(req: operations.DeleteEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventIntegrationResponse>;
    GetEventIntegration(req: operations.GetEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetEventIntegrationResponse>;
    ListEventIntegrationAssociations(req: operations.ListEventIntegrationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationAssociationsResponse>;
    ListEventIntegrations(req: operations.ListEventIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationsResponse>;
    ListTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    TagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    UntagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    UpdateEventIntegration(req: operations.UpdateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventIntegrationResponse>;
}
export {};
