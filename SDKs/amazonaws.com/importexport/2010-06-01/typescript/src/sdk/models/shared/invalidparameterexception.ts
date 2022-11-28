import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidParameterException
/** 
 * One or more parameters had an invalid value.
**/
export class InvalidParameterException extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message?: string;
}
