import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutImagePolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageArn" })
  imageArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
