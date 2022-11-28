import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentConfigsOutput
/** 
 * Represents the output of a <code>ListDeploymentConfigs</code> operation.
**/
export class ListDeploymentConfigsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfigsList" })
  deploymentConfigsList?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
