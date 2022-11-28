import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionExecutionResult
/** 
 * Execution result information, such as the external execution ID.
**/
export class ActionExecutionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalExecutionId" })
  externalExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=externalExecutionSummary" })
  externalExecutionSummary?: string;

  @SpeakeasyMetadata({ data: "json, name=externalExecutionUrl" })
  externalExecutionUrl?: string;
}
