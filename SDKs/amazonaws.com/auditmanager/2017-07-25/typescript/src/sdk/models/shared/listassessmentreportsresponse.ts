import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssessmentReportMetadata } from "./assessmentreportmetadata";


export class ListAssessmentReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assessmentReports", elemType: shared.AssessmentReportMetadata })
  assessmentReports?: AssessmentReportMetadata[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
