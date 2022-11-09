import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecutionDetails
/** 
 * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
**/
export class ExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @Metadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @Metadata({ data: "json, name=summary" })
  summary?: string;
}
