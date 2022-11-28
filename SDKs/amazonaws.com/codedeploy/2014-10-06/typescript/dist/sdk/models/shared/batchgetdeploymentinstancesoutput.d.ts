import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";
/**
 * Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
**/
export declare class BatchGetDeploymentInstancesOutput extends SpeakeasyBase {
    errorMessage?: string;
    instancesSummary?: InstanceSummary[];
}
