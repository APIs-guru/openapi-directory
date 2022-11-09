import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteHapgRequest
/** 
 * Contains the inputs for the <a>DeleteHapg</a> action.
**/
export class DeleteHapgRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HapgArn" })
  hapgArn: string;
}
