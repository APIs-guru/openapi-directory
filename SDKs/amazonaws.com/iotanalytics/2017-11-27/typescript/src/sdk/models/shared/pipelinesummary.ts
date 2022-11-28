import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReprocessingSummary } from "./reprocessingsummary";



// PipelineSummary
/** 
 * A summary of information about a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @SpeakeasyMetadata({ data: "json, name=reprocessingSummaries", elemType: ReprocessingSummary })
  reprocessingSummaries?: ReprocessingSummary[];
}
