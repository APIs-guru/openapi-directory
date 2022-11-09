import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateDeploymentOutput
/** 
 *  Represents the output of a <code>CreateDeployment</code> operation. 
**/
export class CreateDeploymentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;
}
