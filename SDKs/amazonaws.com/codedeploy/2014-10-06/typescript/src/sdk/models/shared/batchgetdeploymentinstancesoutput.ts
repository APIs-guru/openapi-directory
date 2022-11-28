import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSummary } from "./instancesummary";



// BatchGetDeploymentInstancesOutput
/** 
 * Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
**/
export class BatchGetDeploymentInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=instancesSummary", elemType: InstanceSummary })
  instancesSummary?: InstanceSummary[];
}
