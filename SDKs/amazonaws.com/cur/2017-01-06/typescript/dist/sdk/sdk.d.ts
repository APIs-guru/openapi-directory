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
    DeleteReportDefinition(req: operations.DeleteReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReportDefinitionResponse>;
    DescribeReportDefinitions(req: operations.DescribeReportDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReportDefinitionsResponse>;
    ModifyReportDefinition(req: operations.ModifyReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.ModifyReportDefinitionResponse>;
    PutReportDefinition(req: operations.PutReportDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.PutReportDefinitionResponse>;
}
export {};
