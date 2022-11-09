import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateRemoteAccessSessionConfiguration } from "./createremoteaccesssessionconfiguration";
import { InteractionModeEnum } from "./interactionmodeenum";


// CreateRemoteAccessSessionRequest
/** 
 * Creates and submits a request to start a remote access session.
**/
export class CreateRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=configuration" })
  configuration?: CreateRemoteAccessSessionConfiguration;

  @Metadata({ data: "json, name=deviceArn" })
  deviceArn: string;

  @Metadata({ data: "json, name=instanceArn" })
  instanceArn?: string;

  @Metadata({ data: "json, name=interactionMode" })
  interactionMode?: InteractionModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectArn" })
  projectArn: string;

  @Metadata({ data: "json, name=remoteDebugEnabled" })
  remoteDebugEnabled?: boolean;

  @Metadata({ data: "json, name=remoteRecordAppArn" })
  remoteRecordAppArn?: string;

  @Metadata({ data: "json, name=remoteRecordEnabled" })
  remoteRecordEnabled?: boolean;

  @Metadata({ data: "json, name=skipAppResign" })
  skipAppResign?: boolean;

  @Metadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: string;
}
