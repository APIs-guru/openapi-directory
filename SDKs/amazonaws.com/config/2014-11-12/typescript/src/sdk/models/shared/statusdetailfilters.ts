import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";


// StatusDetailFilters
/** 
 * Status filter object to filter results based on specific member account ID or status type for an organization config rule. 
**/
export class StatusDetailFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=MemberAccountRuleStatus" })
  memberAccountRuleStatus?: MemberAccountRuleStatusEnum;
}
