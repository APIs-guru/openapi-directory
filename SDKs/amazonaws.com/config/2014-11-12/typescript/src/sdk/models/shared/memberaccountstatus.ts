import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";


// MemberAccountStatus
/** 
 * Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
**/
export class MemberAccountStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @Metadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=MemberAccountRuleStatus" })
  memberAccountRuleStatus: MemberAccountRuleStatusEnum;
}
