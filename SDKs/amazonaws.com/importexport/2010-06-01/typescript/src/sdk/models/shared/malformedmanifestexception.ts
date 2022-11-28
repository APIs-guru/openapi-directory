import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MalformedManifestException
/** 
 * Your manifest is not well-formed.
**/
export class MalformedManifestException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
