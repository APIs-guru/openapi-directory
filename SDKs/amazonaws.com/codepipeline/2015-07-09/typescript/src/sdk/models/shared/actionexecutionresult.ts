import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionExecutionResult
/** 
 * Execution result information, such as the external execution ID.
**/
export class ActionExecutionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @Metadata({ data: "json, name=externalExecutionSummary" })
  externalExecutionSummary?: string;

  @Metadata({ data: "json, name=externalExecutionUrl" })
  externalExecutionUrl?: string;
}
