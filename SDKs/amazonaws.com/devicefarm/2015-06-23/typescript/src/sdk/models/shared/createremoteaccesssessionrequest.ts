import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateRemoteAccessSessionConfiguration } from "./createremoteaccesssessionconfiguration";
import { InteractionModeEnum } from "./interactionmodeenum";



// CreateRemoteAccessSessionRequest
/** 
 * Creates and submits a request to start a remote access session.
**/
export class CreateRemoteAccessSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: CreateRemoteAccessSessionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @SpeakeasyMetadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=interactionMode" })
  interactionMode?: InteractionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;

  @SpeakeasyMetadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remoteRecordAppArn" })
  remoteRecordAppArn?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteRecordEnabled" })
  remoteRecordEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: string;
}
