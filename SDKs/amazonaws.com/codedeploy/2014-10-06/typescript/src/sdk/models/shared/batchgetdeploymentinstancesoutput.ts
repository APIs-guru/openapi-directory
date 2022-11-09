import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceSummary } from "./instancesummary";


// BatchGetDeploymentInstancesOutput
/** 
 * Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
**/
export class BatchGetDeploymentInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=instancesSummary", elemType: shared.InstanceSummary })
  instancesSummary?: InstanceSummary[];
}
