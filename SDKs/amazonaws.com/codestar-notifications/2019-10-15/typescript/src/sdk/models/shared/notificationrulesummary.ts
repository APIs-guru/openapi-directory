import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationRuleSummary
/** 
 * Information about a specified notification rule.
**/
export class NotificationRuleSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;
}
