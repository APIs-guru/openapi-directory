import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteHsmResponse
/** 
 * Contains the output of the <a>DeleteHsm</a> operation.
**/
export class DeleteHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
