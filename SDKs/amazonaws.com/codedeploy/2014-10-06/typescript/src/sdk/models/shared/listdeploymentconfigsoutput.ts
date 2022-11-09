import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentConfigsOutput
/** 
 * Represents the output of a <code>ListDeploymentConfigs</code> operation.
**/
export class ListDeploymentConfigsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfigsList" })
  deploymentConfigsList?: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
