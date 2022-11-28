import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepositoryTriggerExecutionFailure
/** 
 * A trigger failed to run.
**/
export class RepositoryTriggerExecutionFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: string;
}
