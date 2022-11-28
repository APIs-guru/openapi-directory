import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProgressUpdateStreamSummary } from "./progressupdatestreamsummary";



export class ListProgressUpdateStreamsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProgressUpdateStreamSummaryList", elemType: ProgressUpdateStreamSummary })
  progressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[];
}
