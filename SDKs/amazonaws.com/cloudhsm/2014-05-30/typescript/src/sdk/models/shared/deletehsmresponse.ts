import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteHsmResponse
/** 
 * Contains the output of the <a>DeleteHsm</a> operation.
**/
export class DeleteHsmResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status: string;
}
