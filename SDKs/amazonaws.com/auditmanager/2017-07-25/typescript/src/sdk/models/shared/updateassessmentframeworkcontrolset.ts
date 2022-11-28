import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssessmentFrameworkControl } from "./createassessmentframeworkcontrol";



// UpdateAssessmentFrameworkControlSet
/** 
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
**/
export class UpdateAssessmentFrameworkControlSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=controls", elemType: CreateAssessmentFrameworkControl })
  controls?: CreateAssessmentFrameworkControl[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
