import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotIndexException
/** 
 * Indicates that the requested operation can only operate on index objects.
**/
export class NotIndexException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
