import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteHapgResponse
/** 
 * Contains the output of the <a>DeleteHapg</a> action.
**/
export class DeleteHapgResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status: string;
}
