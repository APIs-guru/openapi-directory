import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplayStateEnum } from "./replaystateenum";


export class CancelReplayResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplayArn" })
  replayArn?: string;

  @Metadata({ data: "json, name=State" })
  state?: ReplayStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
