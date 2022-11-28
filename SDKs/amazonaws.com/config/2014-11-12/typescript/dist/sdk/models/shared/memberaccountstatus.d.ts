import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";
/**
 * Organization config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.
**/
export declare class MemberAccountStatus extends SpeakeasyBase {
    accountId: string;
    configRuleName: string;
    errorCode?: string;
    errorMessage?: string;
    lastUpdateTime?: Date;
    memberAccountRuleStatus: MemberAccountRuleStatusEnum;
}
