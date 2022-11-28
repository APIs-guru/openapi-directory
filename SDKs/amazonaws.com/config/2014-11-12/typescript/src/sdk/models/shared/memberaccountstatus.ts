import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";



// MemberAccountStatus
/** 
 * Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
**/
export class MemberAccountStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=ConfigRuleName" })
  configRuleName: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ErrorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MemberAccountRuleStatus" })
  memberAccountRuleStatus: MemberAccountRuleStatusEnum;
}
