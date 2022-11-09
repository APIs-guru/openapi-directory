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
    BatchCreateTableRows(req: operations.BatchCreateTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchCreateTableRowsResponse>;
    BatchDeleteTableRows(req: operations.BatchDeleteTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteTableRowsResponse>;
    BatchUpdateTableRows(req: operations.BatchUpdateTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateTableRowsResponse>;
    BatchUpsertTableRows(req: operations.BatchUpsertTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpsertTableRowsResponse>;
    DescribeTableDataImportJob(req: operations.DescribeTableDataImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableDataImportJobResponse>;
    GetScreenData(req: operations.GetScreenDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScreenDataResponse>;
    InvokeScreenAutomation(req: operations.InvokeScreenAutomationRequest, config?: AxiosRequestConfig): Promise<operations.InvokeScreenAutomationResponse>;
    ListTableColumns(req: operations.ListTableColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ListTableColumnsResponse>;
    ListTableRows(req: operations.ListTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.ListTableRowsResponse>;
    ListTables(req: operations.ListTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListTablesResponse>;
    QueryTableRows(req: operations.QueryTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.QueryTableRowsResponse>;
    StartTableDataImportJob(req: operations.StartTableDataImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTableDataImportJobResponse>;
}
export {};
