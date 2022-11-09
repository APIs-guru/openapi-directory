import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourcePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyHash" })
  policyHash?: string;
}
