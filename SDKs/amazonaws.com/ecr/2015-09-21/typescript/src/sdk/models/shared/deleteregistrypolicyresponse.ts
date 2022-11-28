import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRegistryPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policyText" })
  policyText?: string;

  @SpeakeasyMetadata({ data: "json, name=registryId" })
  registryId?: string;
}
