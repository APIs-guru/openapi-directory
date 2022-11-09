import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateJsonClassifierRequest
/** 
 * Specifies a JSON classifier for <code>CreateClassifier</code> to create.
**/
export class CreateJsonClassifierRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JsonPath" })
  jsonPath: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
