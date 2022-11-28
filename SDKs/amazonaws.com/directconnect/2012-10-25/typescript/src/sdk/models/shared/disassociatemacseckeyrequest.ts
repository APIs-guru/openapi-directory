import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateMacSecKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "json, name=secretARN" })
  secretArn: string;
}
