import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
**/
export declare class CostTypes extends SpeakeasyBase {
    includeCredit?: boolean;
    includeDiscount?: boolean;
    includeOtherSubscription?: boolean;
    includeRecurring?: boolean;
    includeRefund?: boolean;
    includeSubscription?: boolean;
    includeSupport?: boolean;
    includeTax?: boolean;
    includeUpfront?: boolean;
    useAmortized?: boolean;
    useBlended?: boolean;
}
