import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstallToRemoteAccessSessionRequest
/** 
 * Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
**/
export class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appArn" })
  appArn: string;

  @Metadata({ data: "json, name=remoteAccessSessionArn" })
  remoteAccessSessionArn: string;
}
