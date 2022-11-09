import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAssessmentFrameworkControl } from "./createassessmentframeworkcontrol";


// UpdateAssessmentFrameworkControlSet
/** 
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID. 
**/
export class UpdateAssessmentFrameworkControlSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=controls", elemType: shared.CreateAssessmentFrameworkControl })
  controls?: CreateAssessmentFrameworkControl[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}
