import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";



// StatusDetailFilters
/** 
 * Status filter object to filter results based on specific member account ID or status type for an organization config rule. 
**/
export class StatusDetailFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=MemberAccountRuleStatus" })
  memberAccountRuleStatus?: MemberAccountRuleStatusEnum;
}
