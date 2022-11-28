import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MissingCustomsException
/** 
 * One or more required customs parameters was missing from the manifest.
**/
export class MissingCustomsException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
