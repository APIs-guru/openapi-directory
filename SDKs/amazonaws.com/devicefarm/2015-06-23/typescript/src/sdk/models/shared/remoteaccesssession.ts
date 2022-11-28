import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=billingMethod" })
  billingMethod?: BillingMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: Device;

  @SpeakeasyMetadata({ data: "json, name=deviceMinutes" })
  deviceMinutes?: DeviceMinutes;

  @SpeakeasyMetadata({ data: "json, name=deviceUdid" })
  deviceUdid?: string;

  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=hostAddress" })
  hostAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=interactionMode" })
  interactionMode?: InteractionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remoteRecordAppArn" })
  remoteRecordAppArn?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteRecordEnabled" })
  remoteRecordEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: ExecutionResultEnum;

  @SpeakeasyMetadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=stopped" })
  stopped?: Date;
}
