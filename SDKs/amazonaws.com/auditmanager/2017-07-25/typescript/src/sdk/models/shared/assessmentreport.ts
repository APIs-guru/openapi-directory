import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";


// AssessmentReport
/** 
 *  A finalized document generated from an Audit Manager assessment. These reports summarize the relevant evidence collected for your audit, and link to the relevant evidence folders which are named and organized according to the controls specified in your assessment. 
**/
export class AssessmentReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=status" })
  status?: AssessmentReportStatusEnum;
}
