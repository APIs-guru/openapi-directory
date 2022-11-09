import { SpeakeasyBase } from "../../../internal/utils/utils";
import { QuotaPeriodTypeEnum } from "./quotaperiodtypeenum";
/**
 * Quotas configured for a usage plan.
**/
export declare class QuotaSettings extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    period?: QuotaPeriodTypeEnum;
}
