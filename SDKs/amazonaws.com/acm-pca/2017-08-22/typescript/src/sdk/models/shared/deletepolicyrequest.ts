import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
