import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopDeploymentInput
/** 
 *  Represents the input of a <code>StopDeployment</code> operation. 
**/
export class StopDeploymentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRollbackEnabled" })
  autoRollbackEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId: string;
}
