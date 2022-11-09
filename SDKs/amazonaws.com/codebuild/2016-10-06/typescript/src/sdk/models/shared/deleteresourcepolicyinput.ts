import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteResourcePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
