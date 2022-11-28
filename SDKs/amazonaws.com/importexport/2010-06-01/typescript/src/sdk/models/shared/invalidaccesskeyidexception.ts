import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidAccessKeyIdException
/** 
 * The AWS Access Key ID specified in the request did not match the manifest's accessKeyId value. The manifest and the request authentication must use the same AWS Access Key ID.
**/
export class InvalidAccessKeyIdException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
