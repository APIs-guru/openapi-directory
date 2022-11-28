import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportMetadata } from "./assessmentreportmetadata";



export class ListAssessmentReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assessmentReports", elemType: AssessmentReportMetadata })
  assessmentReports?: AssessmentReportMetadata[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
