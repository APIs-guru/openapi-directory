import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutImagePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageArn" })
  imageArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
