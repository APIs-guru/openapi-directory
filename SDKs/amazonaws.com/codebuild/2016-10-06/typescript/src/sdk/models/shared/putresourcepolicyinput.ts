import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutResourcePolicyInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy: string;

  @Metadata({ data: "json, name=resourceArn" })
  resourceArn: string;
}
