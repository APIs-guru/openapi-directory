import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LambdaEventSource } from "./lambdaeventsource";
import { LambdaInputPayloadEncodingTypeEnum } from "./lambdainputpayloadencodingtypeenum";
import { LambdaLinuxProcessParams } from "./lambdalinuxprocessparams";



// LambdaExecutionParameters
/** 
 * Contains parameters for a Lambda function that runs on IoT Greengrass.
**/
export class LambdaExecutionParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=eventSources", elemType: LambdaEventSource })
  eventSources?: LambdaEventSource[];

  @SpeakeasyMetadata({ data: "json, name=execArgs" })
  execArgs?: string[];

  @SpeakeasyMetadata({ data: "json, name=inputPayloadEncodingType" })
  inputPayloadEncodingType?: LambdaInputPayloadEncodingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=linuxProcessParams" })
  linuxProcessParams?: LambdaLinuxProcessParams;

  @SpeakeasyMetadata({ data: "json, name=maxIdleTimeInSeconds" })
  maxIdleTimeInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=maxInstancesCount" })
  maxInstancesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=maxQueueSize" })
  maxQueueSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusTimeoutInSeconds" })
  statusTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
