import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RollbackInfo
/** 
 * Information about a deployment rollback.
**/
export class RollbackInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rollbackDeploymentId" })
  rollbackDeploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=rollbackMessage" })
  rollbackMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=rollbackTriggeringDeploymentId" })
  rollbackTriggeringDeploymentId?: string;
}
