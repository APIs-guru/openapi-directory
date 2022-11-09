import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingMethodEnum } from "./billingmethodenum";
import { Device } from "./device";
import { DeviceMinutes } from "./deviceminutes";
import { InteractionModeEnum } from "./interactionmodeenum";
import { ExecutionResultEnum } from "./executionresultenum";
import { ExecutionStatusEnum } from "./executionstatusenum";


// RemoteAccessSession
/** 
 * Represents information about the remote access session.
**/
export class RemoteAccessSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=device" })
  device?: Device;

  @Metadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @Metadata({ data: "json, name=deviceUdid" })
  deviceUdid?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=hostAddress" })
  hostAddress?: string;

  @Metadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @Metadata({ data: "json, name=interactionMode" })
  interactionMode?: InteractionModeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @Metadata({ data: "json, name=remoteRecordAppArn" })
  remoteRecordAppArn?: string;

  @Metadata({ data: "json, name=remoteRecordEnabled" })
  remoteRecordEnabled?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @Metadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @Metadata({ data: "json, name=started" })
  started?: Date;

  @Metadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @Metadata({ data: "json, name=stopped" })
  stopped?: Date;
}
