import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Attribute
/** 
 * This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.
**/
export class Attribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
