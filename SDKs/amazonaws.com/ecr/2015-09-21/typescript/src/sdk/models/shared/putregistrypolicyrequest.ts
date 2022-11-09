import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRegistryPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyText" })
  policyText: string;
}
