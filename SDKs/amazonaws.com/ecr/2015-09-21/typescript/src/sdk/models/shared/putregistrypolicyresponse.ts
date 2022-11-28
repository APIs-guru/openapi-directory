import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRegistryPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;
}
