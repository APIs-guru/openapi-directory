import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryTriggerExecutionFailure } from "./repositorytriggerexecutionfailure";
/**
 * Represents the output of a test repository triggers operation.
**/
export declare class TestRepositoryTriggersOutput extends SpeakeasyBase {
    failedExecutions?: RepositoryTriggerExecutionFailure[];
    successfulExecutions?: string[];
}
