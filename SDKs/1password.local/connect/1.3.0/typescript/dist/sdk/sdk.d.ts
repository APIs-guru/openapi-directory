import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://1password.local", "http://localhost:8080/v1"];
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
     * createVaultItem - Create a new Item
    **/
    createVaultItem(req: operations.CreateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateVaultItemResponse>;
    /**
     * deleteVaultItem - Delete an Item
    **/
    deleteVaultItem(req: operations.DeleteVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVaultItemResponse>;
    /**
     * downloadFileById - Get the content of a File
    **/
    downloadFileById(req: operations.DownloadFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileByIdResponse>;
    /**
     * getApiActivity - Retrieve a list of API Requests that have been made.
    **/
    getApiActivity(req: operations.GetApiActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetApiActivityResponse>;
    /**
     * getDetailsOfFileById - Get the details of a File
    **/
    getDetailsOfFileById(req: operations.GetDetailsOfFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsOfFileByIdResponse>;
    /**
     * getHeartbeat - Ping the server for liveness
    **/
    getHeartbeat(req: operations.GetHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetHeartbeatResponse>;
    /**
     * getItemFiles - Get all the files inside an Item
    **/
    getItemFiles(req: operations.GetItemFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemFilesResponse>;
    /**
     * getPrometheusMetrics - Query server for exposed Prometheus metrics
     *
     * See Prometheus documentation for a complete data model.
    **/
    getPrometheusMetrics(req: operations.GetPrometheusMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetPrometheusMetricsResponse>;
    /**
     * getServerHealth - Get state of the server and its dependencies.
    **/
    getServerHealth(req: operations.GetServerHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetServerHealthResponse>;
    /**
     * getVaultById - Get Vault details and metadata
    **/
    getVaultById(req: operations.GetVaultByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultByIdResponse>;
    /**
     * getVaultItemById - Get the details of an Item
    **/
    getVaultItemById(req: operations.GetVaultItemByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemByIdResponse>;
    /**
     * getVaultItems - Get all items for inside a Vault
    **/
    getVaultItems(req: operations.GetVaultItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemsResponse>;
    /**
     * getVaults - Get all Vaults
    **/
    getVaults(req: operations.GetVaultsRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultsResponse>;
    /**
     * patchVaultItem - Update a subset of Item attributes
     *
     * Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.
     *
     * When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`
     *
    **/
    patchVaultItem(req: operations.PatchVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.PatchVaultItemResponse>;
    /**
     * updateVaultItem - Update an Item
    **/
    updateVaultItem(req: operations.UpdateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVaultItemResponse>;
}
export {};
