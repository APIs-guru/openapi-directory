import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Record } from "./record";


// UpdateRecordsResponse
/** 
 * Returned for a successful UpdateRecordsRequest.
**/
export class UpdateRecordsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Records", elemType: shared.Record })
  records?: Record[];
}
