import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListDeploymentConfigsInput
/** 
 * Represents the input of a <code>ListDeploymentConfigs</code> operation.
**/
export class ListDeploymentConfigsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
