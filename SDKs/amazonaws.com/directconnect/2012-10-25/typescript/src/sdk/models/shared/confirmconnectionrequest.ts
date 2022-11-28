import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfirmConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId: string;
}
