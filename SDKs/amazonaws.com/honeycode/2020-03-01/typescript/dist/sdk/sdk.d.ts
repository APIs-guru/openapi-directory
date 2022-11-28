import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://honeycode.{region}.amazonaws.com", "https://honeycode.{region}.amazonaws.com", "http://honeycode.{region}.amazonaws.com.cn", "https://honeycode.{region}.amazonaws.com.cn"];
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
     * batchCreateTableRows - <p> The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook. The API allows you to specify the values to set in some or all of the columns in the new rows. </p> <p> If a column is not explicitly set in a specific row, then the column level formula specified in the table will be applied to the new row. If there is no column level formula but the last row of the table has a formula, then that formula will be copied down to the new row. If there is no column level formula and no formula in the last row of the table, then that column will be left blank for the new rows. </p>
    **/
    batchCreateTableRows(req: operations.BatchCreateTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchCreateTableRowsResponse>;
    /**
     * batchDeleteTableRows -  The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook. You need to specify the ids of the rows that you want to delete from the table.
    **/
    batchDeleteTableRows(req: operations.BatchDeleteTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteTableRowsResponse>;
    /**
     * batchUpdateTableRows - <p> The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook. </p> <p> You can specify the values to set in some or all of the columns in the table for the specified rows. If a column is not explicitly specified in a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
    **/
    batchUpdateTableRows(req: operations.BatchUpdateTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateTableRowsResponse>;
    /**
     * batchUpsertTableRows - <p> The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert operation takes a filter expression as input and evaluates it to find matching rows on the destination table. If matching rows are found, it will update the cells in the matching rows to new values specified in the request. If no matching rows are found, a new row is added at the end of the table and the cells in that row are set to the new values specified in the request. </p> <p> You can specify the values to set in some or all of the columns in the table for the matching or newly appended rows. If a column is not explicitly specified for a particular row, then that column will not be updated for that row. To clear out the data in a specific cell, you need to set the value as an empty string (""). </p>
    **/
    batchUpsertTableRows(req: operations.BatchUpsertTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpsertTableRowsResponse>;
    /**
     * describeTableDataImportJob -  The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
    **/
    describeTableDataImportJob(req: operations.DescribeTableDataImportJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableDataImportJobResponse>;
    /**
     * getScreenData -  The GetScreenData API allows retrieval of data from a screen in a Honeycode app. The API allows setting local variables in the screen to filter, sort or otherwise affect what will be displayed on the screen.
    **/
    getScreenData(req: operations.GetScreenDataRequest, config?: AxiosRequestConfig): Promise<operations.GetScreenDataResponse>;
    /**
     * invokeScreenAutomation -  The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app. The API allows setting local variables, which can then be used in the automation being invoked. This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
    **/
    invokeScreenAutomation(req: operations.InvokeScreenAutomationRequest, config?: AxiosRequestConfig): Promise<operations.InvokeScreenAutomationResponse>;
    /**
     * listTableColumns -  The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
    **/
    listTableColumns(req: operations.ListTableColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ListTableColumnsResponse>;
    /**
     * listTableRows -  The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
    **/
    listTableRows(req: operations.ListTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.ListTableRowsResponse>;
    /**
     * listTables -  The ListTables API allows you to retrieve a list of all the tables in a workbook.
    **/
    listTables(req: operations.ListTablesRequest, config?: AxiosRequestConfig): Promise<operations.ListTablesResponse>;
    /**
     * queryTableRows -  The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
    **/
    queryTableRows(req: operations.QueryTableRowsRequest, config?: AxiosRequestConfig): Promise<operations.QueryTableRowsResponse>;
    /**
     * startTableDataImportJob -  The StartTableDataImportJob API allows you to start an import job on a table. This API will only return the id of the job that was started. To find out the status of the import request, you need to call the DescribeTableDataImportJob API.
    **/
    startTableDataImportJob(req: operations.StartTableDataImportJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTableDataImportJobResponse>;
}
export {};
