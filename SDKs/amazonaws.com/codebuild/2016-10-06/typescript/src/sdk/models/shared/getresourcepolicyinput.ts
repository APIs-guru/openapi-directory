import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
