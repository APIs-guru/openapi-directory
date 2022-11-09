import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateHapgRequest
/** 
 * Contains the inputs for the <a>CreateHapgRequest</a> action.
**/
export class CreateHapgRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Label" })
  label: string;
}
