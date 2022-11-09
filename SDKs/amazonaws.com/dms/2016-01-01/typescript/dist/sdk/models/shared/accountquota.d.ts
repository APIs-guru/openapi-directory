import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a quota for an Amazon Web Services account, for example the number of replication instances allowed.
**/
export declare class AccountQuota extends SpeakeasyBase {
    accountQuotaName?: string;
    max?: number;
    used?: number;
}
