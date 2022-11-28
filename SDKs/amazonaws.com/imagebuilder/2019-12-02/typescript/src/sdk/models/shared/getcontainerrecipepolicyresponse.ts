import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerRecipePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
