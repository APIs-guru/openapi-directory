import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportStatusEnum } from "./reportstatusenum";


export class GetAssessmentReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status: ReportStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
