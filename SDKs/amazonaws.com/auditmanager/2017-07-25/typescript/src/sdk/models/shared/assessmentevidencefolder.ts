import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AssessmentEvidenceFolder
/** 
 *  The folder in which Audit Manager stores evidence for an assessment. 
**/
export class AssessmentEvidenceFolder extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentReportSelectionCount" })
  assessmentReportSelectionCount?: number;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=controlId" })
  controlId?: string;

  @Metadata({ data: "json, name=controlName" })
  controlName?: string;

  @Metadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @Metadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=evidenceAwsServiceSourceCount" })
  evidenceAwsServiceSourceCount?: number;

  @Metadata({ data: "json, name=evidenceByTypeComplianceCheckCount" })
  evidenceByTypeComplianceCheckCount?: number;

  @Metadata({ data: "json, name=evidenceByTypeComplianceCheckIssuesCount" })
  evidenceByTypeComplianceCheckIssuesCount?: number;

  @Metadata({ data: "json, name=evidenceByTypeConfigurationDataCount" })
  evidenceByTypeConfigurationDataCount?: number;

  @Metadata({ data: "json, name=evidenceByTypeManualCount" })
  evidenceByTypeManualCount?: number;

  @Metadata({ data: "json, name=evidenceByTypeUserActivityCount" })
  evidenceByTypeUserActivityCount?: number;

  @Metadata({ data: "json, name=evidenceResourcesIncludedCount" })
  evidenceResourcesIncludedCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=totalEvidence" })
  totalEvidence?: number;
}
