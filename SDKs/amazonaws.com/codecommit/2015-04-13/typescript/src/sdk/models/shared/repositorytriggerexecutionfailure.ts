import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepositoryTriggerExecutionFailure
/** 
 * A trigger failed to run.
**/
export class RepositoryTriggerExecutionFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=trigger" })
  trigger?: string;
}
