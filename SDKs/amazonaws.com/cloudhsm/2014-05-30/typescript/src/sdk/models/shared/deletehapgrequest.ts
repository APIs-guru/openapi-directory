import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteHapgRequest
/** 
 * Contains the inputs for the <a>DeleteHapg</a> action.
**/
export class DeleteHapgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HapgArn" })
  hapgArn: string;
}
