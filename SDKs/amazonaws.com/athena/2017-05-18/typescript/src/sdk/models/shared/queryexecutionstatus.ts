import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryExecutionStateEnum } from "./queryexecutionstateenum";



// QueryExecutionStatus
/** 
 * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
**/
export class QueryExecutionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: QueryExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: string;

  @SpeakeasyMetadata({ data: "json, name=SubmissionDateTime" })
  submissionDateTime?: Date;
}
