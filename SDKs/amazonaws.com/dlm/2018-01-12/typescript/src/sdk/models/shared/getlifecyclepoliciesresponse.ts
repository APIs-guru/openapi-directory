import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecyclePolicySummary } from "./lifecyclepolicysummary";



export class GetLifecyclePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policies", elemType: LifecyclePolicySummary })
  policies?: LifecyclePolicySummary[];
}
