import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineActivity } from "./pipelineactivity";
import { ReprocessingSummary } from "./reprocessingsummary";



// Pipeline
/** 
 * Contains information about a pipeline.
**/
export class Pipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: PipelineActivity })
  activities?: PipelineActivity[];

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reprocessingSummaries", elemType: ReprocessingSummary })
  reprocessingSummaries?: ReprocessingSummary[];
}
