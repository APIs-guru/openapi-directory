import { SpeakeasyBase } from "../../../internal/utils";
import { LambdaEventSource } from "./lambdaeventsource";
import { LambdaInputPayloadEncodingTypeEnum } from "./lambdainputpayloadencodingtypeenum";
import { LambdaLinuxProcessParams } from "./lambdalinuxprocessparams";
/**
 * Contains parameters for a Lambda function that runs on IoT Greengrass.
**/
export declare class LambdaExecutionParameters extends SpeakeasyBase {
    environmentVariables?: Map<string, string>;
    eventSources?: LambdaEventSource[];
    execArgs?: string[];
    inputPayloadEncodingType?: LambdaInputPayloadEncodingTypeEnum;
    linuxProcessParams?: LambdaLinuxProcessParams;
    maxIdleTimeInSeconds?: number;
    maxInstancesCount?: number;
    maxQueueSize?: number;
    pinned?: boolean;
    statusTimeoutInSeconds?: number;
    timeoutInSeconds?: number;
}
