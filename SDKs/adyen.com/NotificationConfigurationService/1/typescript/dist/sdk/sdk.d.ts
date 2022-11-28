import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Notification/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * postCreateNotificationConfiguration - Subscribe to notifications.
     *
     * Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.
    **/
    postCreateNotificationConfiguration(req: operations.PostCreateNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateNotificationConfigurationResponse>;
    /**
     * postDeleteNotificationConfigurations - Delete an existing notification subscription configuration.
     *
     * This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.
    **/
    postDeleteNotificationConfigurations(req: operations.PostDeleteNotificationConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.PostDeleteNotificationConfigurationsResponse>;
    /**
     * postGetNotificationConfiguration - Retrieve an existing notification subscription configuration.
     *
     * This endpoint is used to retrieve the details of the configuration of a notification subscription.
    **/
    postGetNotificationConfiguration(req: operations.PostGetNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationResponse>;
    /**
     * postGetNotificationConfigurationList - Retrieve a list of existing notification subscription configurations.
     *
     * This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.
    **/
    postGetNotificationConfigurationList(req: operations.PostGetNotificationConfigurationListRequest, config?: AxiosRequestConfig): Promise<operations.PostGetNotificationConfigurationListResponse>;
    /**
     * postTestNotificationConfiguration - Test an existing notification configuration.
     *
     * This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.
    **/
    postTestNotificationConfiguration(req: operations.PostTestNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostTestNotificationConfigurationResponse>;
    /**
     * postUpdateNotificationConfiguration - Update an existing notification subscription configuration.
     *
     * This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.
    **/
    postUpdateNotificationConfiguration(req: operations.PostUpdateNotificationConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PostUpdateNotificationConfigurationResponse>;
}
export {};
