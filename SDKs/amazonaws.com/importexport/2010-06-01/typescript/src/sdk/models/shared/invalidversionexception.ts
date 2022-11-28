import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidVersionException
/** 
 * The client tool version is invalid.
**/
export class InvalidVersionException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
