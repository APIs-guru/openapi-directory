import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Role } from "./role";
/**
 *  The settings object that holds all supported Audit Manager settings.
**/
export declare class Settings extends SpeakeasyBase {
    defaultAssessmentReportsDestination?: AssessmentReportsDestination;
    defaultProcessOwners?: Role[];
    isAwsOrgEnabled?: boolean;
    kmsKey?: string;
    snsTopic?: string;
}
