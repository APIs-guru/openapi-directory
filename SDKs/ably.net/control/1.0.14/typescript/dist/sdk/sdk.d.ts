import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://control.ably.net/v1"];
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
     * deleteAppsAppIdNamespacesNamespaceId - Deletes a namespace
     *
     * Deletes the namespace with the specified ID, for the specified application ID.
    **/
    deleteAppsAppIdNamespacesNamespaceId(req: operations.DeleteAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdNamespacesNamespaceIdResponse>;
    /**
     * deleteAppsAppIdQueuesQueueId - Deletes a queue
     *
     * Delete the queue with the specified queue name, from the application with the specified application ID.
    **/
    deleteAppsAppIdQueuesQueueId(req: operations.DeleteAppsAppIdQueuesQueueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdQueuesQueueIdResponse>;
    /**
     * deleteAppsAppIdRulesRuleId - Deletes a Reactor rule
    **/
    deleteAppsAppIdRulesRuleId(req: operations.DeleteAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsAppIdRulesRuleIdResponse>;
    /**
     * deleteAppsId - Deletes an app
     *
     * Deletes the application with the specified application ID.
    **/
    deleteAppsId(req: operations.DeleteAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsIdResponse>;
    /**
     * getAccountsAccountIdApps - Lists apps
     *
     * List all applications for the specified account ID.
    **/
    getAccountsAccountIdApps(req: operations.GetAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdAppsResponse>;
    /**
     * getAppsAppIdKeys - Lists app keys
     *
     * Lists the API keys associated with the application ID.
    **/
    getAppsAppIdKeys(req: operations.GetAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdKeysResponse>;
    /**
     * getAppsAppIdNamespaces - Lists namespaces
     *
     * List the namespaces for the specified application ID.
    **/
    getAppsAppIdNamespaces(req: operations.GetAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdNamespacesResponse>;
    /**
     * getAppsAppIdQueues - Lists queues
     *
     * Lists the queues associated with the specified application ID.
    **/
    getAppsAppIdQueues(req: operations.GetAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdQueuesResponse>;
    /**
     * getAppsAppIdRules - Lists Reactor rules
     *
     * Lists the rules for the application specified by the application ID.
    **/
    getAppsAppIdRules(req: operations.GetAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesResponse>;
    /**
     * getAppsAppIdRulesRuleId - Gets a reactor rule by rule ID
     *
     * Returns the rule specified by the rule ID, for the application specified by application ID.
    **/
    getAppsAppIdRulesRuleId(req: operations.GetAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsAppIdRulesRuleIdResponse>;
    /**
     * getMe - Get token details
    **/
    getMe(req: operations.GetMeRequest, config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * patchAppsAppIdKeysKeyId - Updates a key
     *
     * Update the API key with the specified key ID, for the application with the specified application ID.
    **/
    patchAppsAppIdKeysKeyId(req: operations.PatchAppsAppIdKeysKeyIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdKeysKeyIdResponse>;
    /**
     * patchAppsAppIdNamespacesNamespaceId - Updates a namespace
     *
     * Updates the namespace with the specified ID, for the application with the specified application ID.
    **/
    patchAppsAppIdNamespacesNamespaceId(req: operations.PatchAppsAppIdNamespacesNamespaceIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdNamespacesNamespaceIdResponse>;
    /**
     * patchAppsAppIdRulesRuleId - Updates a Reactor rule
    **/
    patchAppsAppIdRulesRuleId(req: operations.PatchAppsAppIdRulesRuleIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsAppIdRulesRuleIdResponse>;
    /**
     * patchAppsId - Updates an app
     *
     * Updates the application with the specified application ID.
    **/
    patchAppsId(req: operations.PatchAppsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchAppsIdResponse>;
    /**
     * postAccountsAccountIdApps - Creates an app
     *
     * Creates an application with the specified properties.
    **/
    postAccountsAccountIdApps(req: operations.PostAccountsAccountIdAppsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountIdAppsResponse>;
    /**
     * postAppsAppIdKeys - Creates a key
     *
     * Creates an API key for the application specified.
    **/
    postAppsAppIdKeys(req: operations.PostAppsAppIdKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysResponse>;
    /**
     * postAppsAppIdKeysKeyIdRevoke - Revokes a key
     *
     * Revokes the API key with the specified ID, with the Application ID. This deletes the key.
    **/
    postAppsAppIdKeysKeyIdRevoke(req: operations.PostAppsAppIdKeysKeyIdRevokeRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdKeysKeyIdRevokeResponse>;
    /**
     * postAppsAppIdNamespaces - Creates a namespace
     *
     * Creates a namespace for the specified application ID.
    **/
    postAppsAppIdNamespaces(req: operations.PostAppsAppIdNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdNamespacesResponse>;
    /**
     * postAppsAppIdQueues - Creates a queue
     *
     * Creates a queue for the application specified by application ID. The properties for the queue to be created are specified in the request body.
    **/
    postAppsAppIdQueues(req: operations.PostAppsAppIdQueuesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdQueuesResponse>;
    /**
     * postAppsAppIdRules - Creates a Reactor rule
     *
     * Creates a rule for the application with the specified application ID.
    **/
    postAppsAppIdRules(req: operations.PostAppsAppIdRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostAppsAppIdRulesResponse>;
    /**
     * postAppsIdPkcs12 - Updates app's APNs info from a `.p12` file
     *
     * Updates the application's Apple Push Notification service (APNs) information.
    **/
    postAppsIdPkcs12(req: operations.PostAppsIdPkcs12Request, config?: AxiosRequestConfig): Promise<operations.PostAppsIdPkcs12Response>;
}
export {};
