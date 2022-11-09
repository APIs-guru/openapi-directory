import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnsubscribeResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn: string;
}
