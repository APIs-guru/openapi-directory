import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRegistryPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText: string;
}
