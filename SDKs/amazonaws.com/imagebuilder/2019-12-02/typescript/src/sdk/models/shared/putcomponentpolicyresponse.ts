import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutComponentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=componentArn" })
  componentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
