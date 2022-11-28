import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateJsonClassifierRequest
/** 
 * Specifies a JSON classifier for <code>CreateClassifier</code> to create.
**/
export class CreateJsonClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JsonPath" })
  jsonPath: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
