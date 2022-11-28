import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLunaClientRequest
/** 
 * Contains the inputs for the <a>CreateLunaClient</a> action.
**/
export class CreateLunaClientRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: string;
}
