import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PolicyTypeValuesEnum } from "./policytypevaluesenum";
import { GettablePolicyStateValuesEnum } from "./gettablepolicystatevaluesenum";


// LifecyclePolicySummary
/** 
 * Summary information about a lifecycle policy.
**/
export class LifecyclePolicySummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=PolicyId" })
  policyId?: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeValuesEnum;

  @Metadata({ data: "json, name=State" })
  state?: GettablePolicyStateValuesEnum;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
