import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateEnum } from "./connectionstateenum";



export class ConfirmConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionState" })
  connectionState?: ConnectionStateEnum;
}
