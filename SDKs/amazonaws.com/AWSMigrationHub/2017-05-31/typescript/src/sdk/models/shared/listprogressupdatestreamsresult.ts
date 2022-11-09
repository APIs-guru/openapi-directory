import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProgressUpdateStreamSummary } from "./progressupdatestreamsummary";


export class ListProgressUpdateStreamsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProgressUpdateStreamSummaryList", elemType: shared.ProgressUpdateStreamSummary })
  progressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[];
}
