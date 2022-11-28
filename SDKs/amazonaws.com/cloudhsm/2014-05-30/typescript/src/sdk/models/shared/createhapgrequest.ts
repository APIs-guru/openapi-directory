import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateHapgRequest
/** 
 * Contains the inputs for the <a>CreateHapgRequest</a> action.
**/
export class CreateHapgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Label" })
  label: string;
}
