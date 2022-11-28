import { SpeakeasyBase } from "../../../internal/utils";
import { CreateRemoteAccessSessionConfiguration } from "./createremoteaccesssessionconfiguration";
import { InteractionModeEnum } from "./interactionmodeenum";
/**
 * Creates and submits a request to start a remote access session.
**/
export declare class CreateRemoteAccessSessionRequest extends SpeakeasyBase {
    clientId?: string;
    configuration?: CreateRemoteAccessSessionConfiguration;
    deviceArn: string;
    instanceArn?: string;
    interactionMode?: InteractionModeEnum;
    name?: string;
    projectArn: string;
    remoteDebugEnabled?: boolean;
    remoteRecordAppArn?: string;
    remoteRecordEnabled?: boolean;
    skipAppResign?: boolean;
    sshPublicKey?: string;
}
