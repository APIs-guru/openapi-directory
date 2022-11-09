import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionStateEnum } from "./connectionstateenum";


export class ConfirmConnectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionState" })
  connectionState?: ConnectionStateEnum;
}
