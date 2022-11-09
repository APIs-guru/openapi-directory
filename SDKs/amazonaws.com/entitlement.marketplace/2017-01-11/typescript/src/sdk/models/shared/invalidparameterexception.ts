import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidParameterException
/** 
 * One or more parameters in your request was invalid.
**/
export class InvalidParameterException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
