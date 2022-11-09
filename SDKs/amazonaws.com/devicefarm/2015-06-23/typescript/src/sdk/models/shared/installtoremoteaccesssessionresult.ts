import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Upload } from "./upload";


// InstallToRemoteAccessSessionResult
/** 
 * Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.
**/
export class InstallToRemoteAccessSessionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=appUpload" })
  appUpload?: Upload;
}
