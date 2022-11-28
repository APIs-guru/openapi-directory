import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteHapgResponse
/** 
 * Contains the output of the <a>DeleteHapg</a> action.
**/
export class DeleteHapgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: string;
}
