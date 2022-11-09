import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 *  The folder in which Audit Manager stores evidence for an assessment.
**/
export declare class AssessmentEvidenceFolder extends SpeakeasyBase {
    assessmentId?: string;
    assessmentReportSelectionCount?: number;
    author?: string;
    controlId?: string;
    controlName?: string;
    controlSetId?: string;
    dataSource?: string;
    date?: Date;
    evidenceAwsServiceSourceCount?: number;
    evidenceByTypeComplianceCheckCount?: number;
    evidenceByTypeComplianceCheckIssuesCount?: number;
    evidenceByTypeConfigurationDataCount?: number;
    evidenceByTypeManualCount?: number;
    evidenceByTypeUserActivityCount?: number;
    evidenceResourcesIncludedCount?: number;
    id?: string;
    name?: string;
    totalEvidence?: number;
}
