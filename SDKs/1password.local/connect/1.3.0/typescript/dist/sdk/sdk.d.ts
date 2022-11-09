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
    CreateVaultItem(req: operations.CreateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.CreateVaultItemResponse>;
    DeleteVaultItem(req: operations.DeleteVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVaultItemResponse>;
    DownloadFileById(req: operations.DownloadFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileByIdResponse>;
    GetApiActivity(req: operations.GetApiActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetApiActivityResponse>;
    GetDetailsOfFileById(req: operations.GetDetailsOfFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsOfFileByIdResponse>;
    GetHeartbeat(req: operations.GetHeartbeatRequest, config?: AxiosRequestConfig): Promise<operations.GetHeartbeatResponse>;
    GetItemFiles(req: operations.GetItemFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetItemFilesResponse>;
    /**
     * See Prometheus documentation for a complete data model.
    **/
    GetPrometheusMetrics(req: operations.GetPrometheusMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetPrometheusMetricsResponse>;
    GetServerHealth(req: operations.GetServerHealthRequest, config?: AxiosRequestConfig): Promise<operations.GetServerHealthResponse>;
    GetVaultById(req: operations.GetVaultByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultByIdResponse>;
    GetVaultItemById(req: operations.GetVaultItemByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemByIdResponse>;
    GetVaultItems(req: operations.GetVaultItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultItemsResponse>;
    GetVaults(req: operations.GetVaultsRequest, config?: AxiosRequestConfig): Promise<operations.GetVaultsResponse>;
    /**
     * Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.
     *
     * When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`
     *
    **/
    PatchVaultItem(req: operations.PatchVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.PatchVaultItemResponse>;
    UpdateVaultItem(req: operations.UpdateVaultItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVaultItemResponse>;
}
export {};
