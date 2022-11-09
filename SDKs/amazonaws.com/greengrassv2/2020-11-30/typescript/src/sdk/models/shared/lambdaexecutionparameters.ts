import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LambdaEventSource } from "./lambdaeventsource";
import { LambdaInputPayloadEncodingTypeEnum } from "./lambdainputpayloadencodingtypeenum";
import { LambdaLinuxProcessParams } from "./lambdalinuxprocessparams";


// LambdaExecutionParameters
/** 
 * Contains parameters for a Lambda function that runs on IoT Greengrass.
**/
export class LambdaExecutionParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=eventSources", elemType: shared.LambdaEventSource })
  eventSources?: LambdaEventSource[];

  @Metadata({ data: "json, name=execArgs" })
  execArgs?: string[];

  @Metadata({ data: "json, name=inputPayloadEncodingType" })
  inputPayloadEncodingType?: LambdaInputPayloadEncodingTypeEnum;

  @Metadata({ data: "json, name=linuxProcessParams" })
  linuxProcessParams?: LambdaLinuxProcessParams;

  @Metadata({ data: "json, name=maxIdleTimeInSeconds" })
  maxIdleTimeInSeconds?: number;

  @Metadata({ data: "json, name=maxInstancesCount" })
  maxInstancesCount?: number;

  @Metadata({ data: "json, name=maxQueueSize" })
  maxQueueSize?: number;

  @Metadata({ data: "json, name=pinned" })
  pinned?: boolean;

  @Metadata({ data: "json, name=statusTimeoutInSeconds" })
  statusTimeoutInSeconds?: number;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}
