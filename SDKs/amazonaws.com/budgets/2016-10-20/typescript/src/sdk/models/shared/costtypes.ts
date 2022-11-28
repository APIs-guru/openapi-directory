import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CostTypes
/** 
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
**/
export class CostTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeCredit" })
  includeCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeDiscount" })
  includeDiscount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeOtherSubscription" })
  includeOtherSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeRecurring" })
  includeRecurring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeRefund" })
  includeRefund?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeSubscription" })
  includeSubscription?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeSupport" })
  includeSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeTax" })
  includeTax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeUpfront" })
  includeUpfront?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseAmortized" })
  useAmortized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=UseBlended" })
  useBlended?: boolean;
}
