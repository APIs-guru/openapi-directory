import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateAssessmentFrameworkControl
/** 
 *  Control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager. 
**/
export class CreateAssessmentFrameworkControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
