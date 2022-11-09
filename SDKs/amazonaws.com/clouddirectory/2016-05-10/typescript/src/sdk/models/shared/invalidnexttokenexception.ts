import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidNextTokenException
/** 
 * Indicates that the <code>NextToken</code> value is not valid.
**/
export class InvalidNextTokenException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
