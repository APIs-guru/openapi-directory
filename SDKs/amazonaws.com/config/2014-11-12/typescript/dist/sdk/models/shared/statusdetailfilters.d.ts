import { SpeakeasyBase } from "../../../internal/utils";
import { MemberAccountRuleStatusEnum } from "./memberaccountrulestatusenum";
/**
 * Status filter object to filter results based on specific member account ID or status type for an organization config rule.
**/
export declare class StatusDetailFilters extends SpeakeasyBase {
    accountId?: string;
    memberAccountRuleStatus?: MemberAccountRuleStatusEnum;
}
