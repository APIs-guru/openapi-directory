import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LifecyclePolicySummary } from "./lifecyclepolicysummary";


export class GetLifecyclePoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policies", elemType: shared.LifecyclePolicySummary })
  policies?: LifecyclePolicySummary[];
}
