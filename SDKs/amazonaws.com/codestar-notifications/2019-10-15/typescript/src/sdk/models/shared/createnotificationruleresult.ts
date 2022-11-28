import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNotificationRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
