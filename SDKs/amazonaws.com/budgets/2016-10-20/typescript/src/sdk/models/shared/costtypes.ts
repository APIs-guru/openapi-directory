import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CostTypes
/** 
 * <p>The types of cost that are included in a <code>COST</code> budget, such as tax and subscriptions.</p> <p> <code>USAGE</code>, <code>RI_UTILIZATION</code>, <code>RI_COVERAGE</code>, <code>SAVINGS_PLANS_UTILIZATION</code>, and <code>SAVINGS_PLANS_COVERAGE</code> budgets do not have <code>CostTypes</code>.</p>
**/
export class CostTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=IncludeCredit" })
  includeCredit?: boolean;

  @Metadata({ data: "json, name=IncludeDiscount" })
  includeDiscount?: boolean;

  @Metadata({ data: "json, name=IncludeOtherSubscription" })
  includeOtherSubscription?: boolean;

  @Metadata({ data: "json, name=IncludeRecurring" })
  includeRecurring?: boolean;

  @Metadata({ data: "json, name=IncludeRefund" })
  includeRefund?: boolean;

  @Metadata({ data: "json, name=IncludeSubscription" })
  includeSubscription?: boolean;

  @Metadata({ data: "json, name=IncludeSupport" })
  includeSupport?: boolean;

  @Metadata({ data: "json, name=IncludeTax" })
  includeTax?: boolean;

  @Metadata({ data: "json, name=IncludeUpfront" })
  includeUpfront?: boolean;

  @Metadata({ data: "json, name=UseAmortized" })
  useAmortized?: boolean;

  @Metadata({ data: "json, name=UseBlended" })
  useBlended?: boolean;
}
