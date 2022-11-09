import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourcePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyHashCondition" })
  policyHashCondition?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;
}
