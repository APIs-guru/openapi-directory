import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeReplayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplayName" })
  replayName: string;
}
