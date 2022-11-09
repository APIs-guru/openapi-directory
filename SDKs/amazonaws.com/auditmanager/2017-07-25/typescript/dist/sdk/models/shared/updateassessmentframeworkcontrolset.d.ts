import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CreateAssessmentFrameworkControl } from "./createassessmentframeworkcontrol";
/**
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID.
**/
export declare class UpdateAssessmentFrameworkControlSet extends SpeakeasyBase {
    controls?: CreateAssessmentFrameworkControl[];
    id?: string;
    name: string;
}
