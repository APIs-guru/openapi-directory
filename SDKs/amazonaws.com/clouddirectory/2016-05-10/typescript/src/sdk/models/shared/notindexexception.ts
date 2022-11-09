import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotIndexException
/** 
 * Indicates that the requested operation can only operate on index objects.
**/
export class NotIndexException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;
}
