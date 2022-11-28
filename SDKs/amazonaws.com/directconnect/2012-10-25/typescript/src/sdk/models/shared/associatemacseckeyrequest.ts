import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateMacSecKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cak" })
  cak?: string;

  @SpeakeasyMetadata({ data: "json, name=ckn" })
  ckn?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=secretARN" })
  secretArn?: string;
}
