import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssessmentReport } from "./assessmentreport";


export class CreateAssessmentReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReport" })
  assessmentReport?: AssessmentReport;
}
