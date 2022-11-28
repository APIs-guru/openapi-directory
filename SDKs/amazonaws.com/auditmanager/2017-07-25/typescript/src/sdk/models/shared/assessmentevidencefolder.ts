import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssessmentEvidenceFolder
/** 
 *  The folder in which Audit Manager stores evidence for an assessment. 
**/
export class AssessmentEvidenceFolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentReportSelectionCount" })
  assessmentReportSelectionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=controlId" })
  controlId?: string;

  @SpeakeasyMetadata({ data: "json, name=controlName" })
  controlName?: string;

  @SpeakeasyMetadata({ data: "json, name=controlSetId" })
  controlSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=evidenceAwsServiceSourceCount" })
  evidenceAwsServiceSourceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceByTypeComplianceCheckCount" })
  evidenceByTypeComplianceCheckCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceByTypeComplianceCheckIssuesCount" })
  evidenceByTypeComplianceCheckIssuesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceByTypeConfigurationDataCount" })
  evidenceByTypeConfigurationDataCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceByTypeManualCount" })
  evidenceByTypeManualCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceByTypeUserActivityCount" })
  evidenceByTypeUserActivityCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evidenceResourcesIncludedCount" })
  evidenceResourcesIncludedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalEvidence" })
  totalEvidence?: number;
}
