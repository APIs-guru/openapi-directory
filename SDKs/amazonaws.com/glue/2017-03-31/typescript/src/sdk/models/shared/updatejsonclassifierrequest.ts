import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateJsonClassifierRequest
/** 
 * Specifies a JSON classifier to be updated.
**/
export class UpdateJsonClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JsonPath" })
  jsonPath?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
