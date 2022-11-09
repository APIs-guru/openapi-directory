import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepositoryTriggerExecutionFailure } from "./repositorytriggerexecutionfailure";


// TestRepositoryTriggersOutput
/** 
 * Represents the output of a test repository triggers operation.
**/
export class TestRepositoryTriggersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedExecutions", elemType: shared.RepositoryTriggerExecutionFailure })
  failedExecutions?: RepositoryTriggerExecutionFailure[];

  @Metadata({ data: "json, name=successfulExecutions" })
  successfulExecutions?: string[];
}
