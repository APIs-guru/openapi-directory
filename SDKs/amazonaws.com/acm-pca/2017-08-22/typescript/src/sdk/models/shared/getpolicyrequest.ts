import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
