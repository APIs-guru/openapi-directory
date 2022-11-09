import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryExecutionStateEnum } from "./queryexecutionstateenum";


// QueryExecutionStatus
/** 
 * The completion date, current state, submission time, and state change reason (if applicable) for the query execution.
**/
export class QueryExecutionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;

  @Metadata({ data: "json, name=State" })
  state?: QueryExecutionStateEnum;

  @Metadata({ data: "json, name=StateChangeReason" })
  stateChangeReason?: string;

  @Metadata({ data: "json, name=SubmissionDateTime" })
  submissionDateTime?: Date;
}
