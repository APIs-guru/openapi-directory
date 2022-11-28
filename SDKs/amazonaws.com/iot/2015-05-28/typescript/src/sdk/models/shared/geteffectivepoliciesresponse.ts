import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EffectivePolicy } from "./effectivepolicy";



export class GetEffectivePoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effectivePolicies", elemType: EffectivePolicy })
  effectivePolicies?: EffectivePolicy[];
}
