import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionIntervalUnitValuesEnum } from "./retentionintervalunitvaluesenum";
/**
 * Specifies a rule for sharing snapshots across Amazon Web Services accounts.
**/
export declare class ShareRule extends SpeakeasyBase {
    targetAccounts: string[];
    unshareInterval?: number;
    unshareIntervalUnit?: RetentionIntervalUnitValuesEnum;
}
