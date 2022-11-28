import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnsubscribeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn: string;
}
