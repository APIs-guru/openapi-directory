import { SpeakeasyBase } from "../../../internal/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { Device } from "./device";
import { DeviceMinutes } from "./deviceminutes";
import { InteractionModeEnum } from "./interactionmodeenum";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
/**
 * Represents information about the remote access session.
**/
export declare class RemoteAccessSession extends SpeakeasyBase {
    arn?: string;
    billingMethod?: BillingMethodEnum;
    clientId?: string;
    created?: Date;
    device?: Device;
    deviceMinutes?: DeviceMinutes;
    deviceUdid?: string;
    endpoint?: string;
    hostAddress?: string;
    instanceArn?: string;
    interactionMode?: InteractionModeEnum;
    message?: string;
    name?: string;
    remoteDebugEnabled?: boolean;
    remoteRecordAppArn?: string;
    remoteRecordEnabled?: boolean;
    result?: ExecutionResultEnum;
    skipAppResign?: boolean;
    started?: Date;
    status?: ExecutionStatusEnum;
    stopped?: Date;
}
