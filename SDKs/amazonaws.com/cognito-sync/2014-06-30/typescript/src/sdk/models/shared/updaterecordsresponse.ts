import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";



// UpdateRecordsResponse
/** 
 * Returned for a successful UpdateRecordsRequest.
**/
export class UpdateRecordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Records", elemType: Record })
  records?: Record[];
}
