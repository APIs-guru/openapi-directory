import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRegistryPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyText" })
  policyText?: string;

  @Metadata({ data: "json, name=registryId" })
  registryId?: string;
}
