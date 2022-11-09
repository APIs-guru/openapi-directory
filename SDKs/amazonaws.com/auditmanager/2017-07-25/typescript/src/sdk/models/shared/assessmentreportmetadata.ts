import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";


// AssessmentReportMetadata
/** 
 *  The metadata objects associated with the specified assessment report. 
**/
export class AssessmentReportMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @Metadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @Metadata({ data: "json, name=author" })
  author?: string;

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
