import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopDeploymentInput
/** 
 *  Represents the input of a <code>StopDeployment</code> operation. 
**/
export class StopDeploymentInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoRollbackEnabled" })
  autoRollbackEnabled?: boolean;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId: string;
}
