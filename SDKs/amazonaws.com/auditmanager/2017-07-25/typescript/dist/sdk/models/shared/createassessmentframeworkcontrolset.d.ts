import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssessmentFrameworkControl } from "./createassessmentframeworkcontrol";
/**
 *  A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This does not contain the control set ID.
**/
export declare class CreateAssessmentFrameworkControlSet extends SpeakeasyBase {
    controls?: CreateAssessmentFrameworkControl[];
    name: string;
}
