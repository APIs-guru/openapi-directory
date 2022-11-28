import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstallToRemoteAccessSessionRequest
/** 
 * Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.
**/
export class InstallToRemoteAccessSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appArn" })
  appArn: string;

  @SpeakeasyMetadata({ data: "json, name=remoteAccessSessionArn" })
  remoteAccessSessionArn: string;
}
