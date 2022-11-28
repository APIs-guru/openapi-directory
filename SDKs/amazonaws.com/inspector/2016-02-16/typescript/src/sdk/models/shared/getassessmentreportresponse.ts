import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportStatusEnum } from "./reportstatusenum";



export class GetAssessmentReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ReportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
