import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://data.iotevents.{region}.amazonaws.com", "https://data.iotevents.{region}.amazonaws.com", "http://data.iotevents.{region}.amazonaws.com.cn", "https://data.iotevents.{region}.amazonaws.com.cn"];
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
     * batchAcknowledgeAlarm - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
    **/
    batchAcknowledgeAlarm(req: operations.BatchAcknowledgeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchAcknowledgeAlarmResponse>;
    /**
     * batchDisableAlarm - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
    **/
    batchDisableAlarm(req: operations.BatchDisableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisableAlarmResponse>;
    /**
     * batchEnableAlarm - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
    **/
    batchEnableAlarm(req: operations.BatchEnableAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchEnableAlarmResponse>;
    /**
     * batchPutMessage - Sends a set of messages to the AWS IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
    **/
    batchPutMessage(req: operations.BatchPutMessageRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutMessageResponse>;
    /**
     * batchResetAlarm - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
    **/
    batchResetAlarm(req: operations.BatchResetAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchResetAlarmResponse>;
    /**
     * batchSnoozeAlarm - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
    **/
    batchSnoozeAlarm(req: operations.BatchSnoozeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.BatchSnoozeAlarmResponse>;
    /**
     * batchUpdateDetector - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
    **/
    batchUpdateDetector(req: operations.BatchUpdateDetectorRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdateDetectorResponse>;
    /**
     * describeAlarm - Retrieves information about an alarm.
    **/
    describeAlarm(req: operations.DescribeAlarmRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlarmResponse>;
    /**
     * describeDetector - Returns information about the specified detector (instance).
    **/
    describeDetector(req: operations.DescribeDetectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectorResponse>;
    /**
     * listAlarms - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
    **/
    listAlarms(req: operations.ListAlarmsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmsResponse>;
    /**
     * listDetectors - Lists detectors (the instances of a detector model).
    **/
    listDetectors(req: operations.ListDetectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectorsResponse>;
}
export {};
