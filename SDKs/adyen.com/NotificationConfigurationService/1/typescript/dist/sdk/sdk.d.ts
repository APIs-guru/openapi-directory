import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
    **/
    PostCreateNotificationConfiguration(req: operations.PostCreateNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateNotificationConfigurationResponse>;
    /**
     * This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.
    **/
    PostDeleteNotificationConfigurations(req: operations.PostDeleteNotificationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteNotificationConfigurationsResponse>;
    /**
     * This endpoint is used to retrieve the details of the configuration of a notification subscription.
    **/
    PostGetNotificationConfiguration(req: operations.PostGetNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationResponse>;
    /**
     * This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.
    **/
    PostGetNotificationConfigurationList(req: operations.PostGetNotificationConfigurationListRequest, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationListResponse>;
    /**
     * This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
    **/
    PostTestNotificationConfiguration(req: operations.PostTestNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostTestNotificationConfigurationResponse>;
    /**
     * This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.
    **/
    PostUpdateNotificationConfiguration(req: operations.PostUpdateNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationConfigurationResponse>;
}
export {};
