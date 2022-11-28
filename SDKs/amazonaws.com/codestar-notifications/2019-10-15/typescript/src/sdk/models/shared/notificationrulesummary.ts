import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationRuleSummary
/** 
 * Information about a specified notification rule.
**/
export class NotificationRuleSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;
}
