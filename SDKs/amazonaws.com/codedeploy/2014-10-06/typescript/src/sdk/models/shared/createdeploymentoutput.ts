import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDeploymentOutput
/** 
 *  Represents the output of a <code>CreateDeployment</code> operation. 
**/
export class CreateDeploymentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;
}
