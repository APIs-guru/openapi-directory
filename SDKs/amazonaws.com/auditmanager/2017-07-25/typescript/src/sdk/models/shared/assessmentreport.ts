import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";



// AssessmentReport
/** 
 *  A finalized document generated from an Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment. 
**/
export class AssessmentReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AssessmentReportStatusEnum;
}
