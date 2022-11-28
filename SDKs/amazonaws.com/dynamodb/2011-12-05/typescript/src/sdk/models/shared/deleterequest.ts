import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



// DeleteRequest
/** 
 * A container for a Delete BatchWrite request
**/
export class DeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: Key;
}
