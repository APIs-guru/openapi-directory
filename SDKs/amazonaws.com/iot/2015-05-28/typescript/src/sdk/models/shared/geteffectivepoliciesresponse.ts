import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EffectivePolicy } from "./effectivepolicy";


export class GetEffectivePoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=effectivePolicies", elemType: shared.EffectivePolicy })
  effectivePolicies?: EffectivePolicy[];
}
