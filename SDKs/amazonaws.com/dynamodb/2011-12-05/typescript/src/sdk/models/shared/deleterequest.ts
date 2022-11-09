import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Key } from "./key";


// DeleteRequest
/** 
 * A container for a Delete BatchWrite request
**/
export class DeleteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: Key;
}
