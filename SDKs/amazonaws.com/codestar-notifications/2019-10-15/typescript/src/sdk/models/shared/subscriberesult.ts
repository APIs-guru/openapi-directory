import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubscribeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
