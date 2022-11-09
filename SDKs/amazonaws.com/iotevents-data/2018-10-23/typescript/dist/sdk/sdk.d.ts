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
    BatchAcknowledgeAlarm(req: operations.BatchAcknowledgeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchAcknowledgeAlarmResponse>;
    BatchDisableAlarm(req: operations.BatchDisableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisableAlarmResponse>;
    BatchEnableAlarm(req: operations.BatchEnableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchEnableAlarmResponse>;
    BatchPutMessage(req: operations.BatchPutMessageRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutMessageResponse>;
    BatchResetAlarm(req: operations.BatchResetAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchResetAlarmResponse>;
    BatchSnoozeAlarm(req: operations.BatchSnoozeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchSnoozeAlarmResponse>;
    BatchUpdateDetector(req: operations.BatchUpdateDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateDetectorResponse>;
    DescribeAlarm(req: operations.DescribeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlarmResponse>;
    DescribeDetector(req: operations.DescribeDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectorResponse>;
    ListAlarms(req: operations.ListAlarmsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmsResponse>;
    ListDetectors(req: operations.ListDetectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectorsResponse>;
}
export {};
