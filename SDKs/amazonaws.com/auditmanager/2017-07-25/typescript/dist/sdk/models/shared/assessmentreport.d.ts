import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";
/**
 *  A finalized document generated from an Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment.
**/
export declare class AssessmentReport extends SpeakeasyBase {
    assessmentId?: string;
    assessmentName?: string;
    author?: string;
    awsAccountId?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    name?: string;
    status?: AssessmentReportStatusEnum;
}
