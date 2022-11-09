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
    DeleteThingShadow(req: operations.DeleteThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThingShadowResponse>;
    GetRetainedMessage(req: operations.GetRetainedMessageRequest, config?: AxiosRequestConfig): Promise<operations.GetRetainedMessageResponse>;
    GetThingShadow(req: operations.GetThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.GetThingShadowResponse>;
    ListNamedShadowsForThing(req: operations.ListNamedShadowsForThingRequest, config?: AxiosRequestConfig): Promise<operations.ListNamedShadowsForThingResponse>;
    ListRetainedMessages(req: operations.ListRetainedMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ListRetainedMessagesResponse>;
    Publish(req: operations.PublishRequest, config?: AxiosRequestConfig): Promise<operations.PublishResponse>;
    UpdateThingShadow(req: operations.UpdateThingShadowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingShadowResponse>;
}
export {};
