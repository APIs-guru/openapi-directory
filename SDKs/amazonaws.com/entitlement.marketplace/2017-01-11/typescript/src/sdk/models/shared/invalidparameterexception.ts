import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidParameterException
/** 
 * One or more parameters in your request was invalid.
**/
export class InvalidParameterException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
