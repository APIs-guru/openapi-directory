import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteReportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;
}
