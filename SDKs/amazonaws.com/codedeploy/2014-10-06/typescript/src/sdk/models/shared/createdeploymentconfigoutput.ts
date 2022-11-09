import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDeploymentConfigOutput
/** 
 * Represents the output of a <code>CreateDeploymentConfig</code> operation.
**/
export class CreateDeploymentConfigOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfigId" })
  deploymentConfigId?: string;
}
