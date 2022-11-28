import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
