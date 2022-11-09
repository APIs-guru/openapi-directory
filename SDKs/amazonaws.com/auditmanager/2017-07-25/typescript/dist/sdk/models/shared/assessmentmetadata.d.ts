import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { Scope } from "./scope";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
/**
 *  The metadata associated with the specified assessment.
**/
export declare class AssessmentMetadata extends SpeakeasyBase {
    assessmentReportsDestination?: AssessmentReportsDestination;
    complianceType?: string;
    creationTime?: Date;
    delegations?: Delegation[];
    description?: string;
    id?: string;
    lastUpdated?: Date;
    name?: string;
    roles?: Role[];
    scope?: Scope;
    status?: AssessmentStatusEnum;
}
