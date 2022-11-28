import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDeploymentConfigOutput
/** 
 * Represents the output of a <code>CreateDeploymentConfig</code> operation.
**/
export class CreateDeploymentConfigOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfigId" })
  deploymentConfigId?: string;
}
