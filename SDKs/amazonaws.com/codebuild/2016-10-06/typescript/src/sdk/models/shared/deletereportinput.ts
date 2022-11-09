import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteReportInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;
}
