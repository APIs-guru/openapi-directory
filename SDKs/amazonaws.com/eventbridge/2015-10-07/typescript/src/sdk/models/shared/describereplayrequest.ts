import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeReplayRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReplayName" })
  replayName: string;
}
