import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteReportGroupInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=deleteReports" })
  deleteReports?: boolean;
}
