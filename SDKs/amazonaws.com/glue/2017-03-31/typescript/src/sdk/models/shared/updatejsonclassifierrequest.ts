import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateJsonClassifierRequest
/** 
 * Specifies a JSON classifier to be updated.
**/
export class UpdateJsonClassifierRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JsonPath" })
  jsonPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
