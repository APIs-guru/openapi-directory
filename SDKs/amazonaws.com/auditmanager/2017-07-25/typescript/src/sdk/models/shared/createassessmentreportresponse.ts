import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReport } from "./assessmentreport";



export class CreateAssessmentReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReport" })
  assessmentReport?: AssessmentReport;
}
