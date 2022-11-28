import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRegistryPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;
}
