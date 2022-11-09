import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSuiteRunReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=qualificationReportDownloadUrl" })
  qualificationReportDownloadUrl?: string;
}
