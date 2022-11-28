import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentInstancesOutput
/** 
 * Represents the output of a <code>ListDeploymentInstances</code> operation.
**/
export class ListDeploymentInstancesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instancesList" })
  instancesList?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
