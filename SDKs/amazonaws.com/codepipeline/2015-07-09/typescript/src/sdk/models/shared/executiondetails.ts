import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecutionDetails
/** 
 * The details of the actions taken and results produced on an artifact as it passes through stages in the pipeline.
**/
export class ExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}
