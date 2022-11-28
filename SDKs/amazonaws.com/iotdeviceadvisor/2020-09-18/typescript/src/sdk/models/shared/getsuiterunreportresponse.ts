import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSuiteRunReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=qualificationReportDownloadUrl" })
  qualificationReportDownloadUrl?: string;
}
