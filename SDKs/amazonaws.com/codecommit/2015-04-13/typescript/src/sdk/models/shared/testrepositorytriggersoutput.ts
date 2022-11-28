import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTriggerExecutionFailure } from "./repositorytriggerexecutionfailure";



// TestRepositoryTriggersOutput
/** 
 * Represents the output of a test repository triggers operation.
**/
export class TestRepositoryTriggersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedExecutions", elemType: RepositoryTriggerExecutionFailure })
  failedExecutions?: RepositoryTriggerExecutionFailure[];

  @SpeakeasyMetadata({ data: "json, name=successfulExecutions" })
  successfulExecutions?: string[];
}
