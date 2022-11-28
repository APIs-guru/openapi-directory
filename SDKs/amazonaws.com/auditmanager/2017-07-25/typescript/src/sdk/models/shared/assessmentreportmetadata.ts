import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportStatusEnum } from "./assessmentreportstatusenum";



// AssessmentReportMetadata
/** 
 *  The metadata objects associated with the specified assessment report. 
**/
export class AssessmentReportMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentId" })
  assessmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=assessmentName" })
  assessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

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
