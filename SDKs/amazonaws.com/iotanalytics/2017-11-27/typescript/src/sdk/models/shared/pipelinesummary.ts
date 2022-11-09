import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReprocessingSummary } from "./reprocessingsummary";


// PipelineSummary
/** 
 * A summary of information about a pipeline.
**/
export class PipelineSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @Metadata({ data: "json, name=pipelineName" })
  pipelineName?: string;

  @Metadata({ data: "json, name=reprocessingSummaries", elemType: shared.ReprocessingSummary })
  reprocessingSummaries?: ReprocessingSummary[];
}
