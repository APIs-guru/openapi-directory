import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeploymentConfigsInput
/** 
 * Represents the input of a <code>ListDeploymentConfigs</code> operation.
**/
export class ListDeploymentConfigsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
