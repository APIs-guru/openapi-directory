import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutComponentPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=componentArn" })
  componentArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
