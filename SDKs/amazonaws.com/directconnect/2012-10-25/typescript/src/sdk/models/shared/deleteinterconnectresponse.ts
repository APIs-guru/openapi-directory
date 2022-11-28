import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterconnectStateEnum } from "./interconnectstateenum";



export class DeleteInterconnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interconnectState" })
  interconnectState?: InterconnectStateEnum;
}
