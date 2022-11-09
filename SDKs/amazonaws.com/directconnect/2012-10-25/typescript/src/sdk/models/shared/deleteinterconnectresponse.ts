import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InterconnectStateEnum } from "./interconnectstateenum";


export class DeleteInterconnectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=interconnectState" })
  interconnectState?: InterconnectStateEnum;
}
