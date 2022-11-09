import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PipelineActivity } from "./pipelineactivity";
import { ReprocessingSummary } from "./reprocessingsummary";


// Pipeline
/** 
 * Contains information about a pipeline.
**/
export class Pipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.PipelineActivity })
  activities?: PipelineActivity[];

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reprocessingSummaries", elemType: shared.ReprocessingSummary })
  reprocessingSummaries?: ReprocessingSummary[];
}
