import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";



// LifecyclePolicySummary
/** 
 * Summary information about a lifecycle policy.
**/
export class LifecyclePolicySummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: GettablePolicyStateValuesEnum;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
