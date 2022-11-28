import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLifecyclePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyId" })
  policyId?: string;
}
