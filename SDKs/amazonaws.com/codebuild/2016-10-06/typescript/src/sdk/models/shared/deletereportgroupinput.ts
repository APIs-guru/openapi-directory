import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteReportGroupInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=deleteReports" })
  deleteReports?: boolean;
}
