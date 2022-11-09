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
     * Deletes the namespace with the specified ID, for the specified application ID.
    **/
    DeleteAppsAppIdNamespacesNamespaceId(req: operations.DeleteAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdNamespacesNamespaceIdResponse>;
    /**
     * Delete the queue with the specified queue name, from the application with the specified application ID.
    **/
    DeleteAppsAppIdQueuesQueueId(req: operations.DeleteAppsAppIdQueuesQueueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdQueuesQueueIdResponse>;
    DeleteAppsAppIdRulesRuleId(req: operations.DeleteAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdRulesRuleIdResponse>;
    /**
     * Deletes the application with the specified application ID.
    **/
    DeleteAppsId(req: operations.DeleteAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsIdResponse>;
    /**
     * List all applications for the specified account ID.
    **/
    GetAccountsAccountIdApps(req: operations.GetAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdAppsResponse>;
    /**
     * Lists the API keys associated with the application ID.
    **/
    GetAppsAppIdKeys(req: operations.GetAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdKeysResponse>;
    /**
     * List the namespaces for the specified application ID.
    **/
    GetAppsAppIdNamespaces(req: operations.GetAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdNamespacesResponse>;
    /**
     * Lists the queues associated with the specified application ID.
    **/
    GetAppsAppIdQueues(req: operations.GetAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdQueuesResponse>;
    /**
     * Lists the rules for the application specified by the application ID.
    **/
    GetAppsAppIdRules(req: operations.GetAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesResponse>;
    /**
     * Returns the rule specified by the rule ID, for the application specified by application ID.
    **/
    GetAppsAppIdRulesRuleId(req: operations.GetAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesRuleIdResponse>;
    GetMe(req: operations.GetMeRequest, config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Update the API key with the specified key ID, for the application with the specified application ID.
    **/
    PatchAppsAppIdKeysKeyId(req: operations.PatchAppsAppIdKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdKeysKeyIdResponse>;
    /**
     * Updates the namespace with the specified ID, for the application with the specified application ID.
    **/
    PatchAppsAppIdNamespacesNamespaceId(req: operations.PatchAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdNamespacesNamespaceIdResponse>;
    PatchAppsAppIdRulesRuleId(req: operations.PatchAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdRulesRuleIdResponse>;
    /**
     * Updates the application with the specified application ID.
    **/
    PatchAppsId(req: operations.PatchAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsIdResponse>;
    /**
     * Creates an application with the specified properties.
    **/
    PostAccountsAccountIdApps(req: operations.PostAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountIdAppsResponse>;
    /**
     * Creates an API key for the application specified.
    **/
    PostAppsAppIdKeys(req: operations.PostAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysResponse>;
    /**
     * Revokes the API key with the specified ID, with the Application ID. This deletes the key.
    **/
    PostAppsAppIdKeysKeyIdRevoke(req: operations.PostAppsAppIdKeysKeyIdRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysKeyIdRevokeResponse>;
    /**
     * Creates a namespace for the specified application ID.
    **/
    PostAppsAppIdNamespaces(req: operations.PostAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdNamespacesResponse>;
    /**
     * Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.
    **/
    PostAppsAppIdQueues(req: operations.PostAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdQueuesResponse>;
    /**
     * Creates a rule for the application with the specified application ID.
    **/
    PostAppsAppIdRules(req: operations.PostAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdRulesResponse>;
    /**
     * Updates the application's Apple Push Notification service (APNs) information.
    **/
    PostAppsIdPkcs12(req: operations.PostAppsIdPkcs12Request, config?: AxiosRequestConfig): Promise<operations.PostAppsIdPkcs12Response>;
}
export {};
