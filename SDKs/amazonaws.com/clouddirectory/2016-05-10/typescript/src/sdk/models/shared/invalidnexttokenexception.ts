import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidNextTokenException
/** 
 * Indicates that the <code>NextToken</code> value is not valid.
**/
export class InvalidNextTokenException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
