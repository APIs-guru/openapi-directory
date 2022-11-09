import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateLunaClientRequest
/** 
 * Contains the inputs for the <a>CreateLunaClient</a> action.
**/
export class CreateLunaClientRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate: string;

  @Metadata({ data: "json, name=Label" })
  label?: string;
}
