import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replay } from "./replay";



export class ListReplaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Replays", elemType: Replay })
  replays?: Replay[];
}
