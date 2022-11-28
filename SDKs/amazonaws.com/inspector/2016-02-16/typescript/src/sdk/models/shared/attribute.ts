import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Attribute
/** 
 * This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.
**/
export class Attribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
