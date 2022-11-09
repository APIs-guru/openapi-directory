import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentInstancesOutput
/** 
 * Represents the output of a <code>ListDeploymentInstances</code> operation.
**/
export class ListDeploymentInstancesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=instancesList" })
  instancesList?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
