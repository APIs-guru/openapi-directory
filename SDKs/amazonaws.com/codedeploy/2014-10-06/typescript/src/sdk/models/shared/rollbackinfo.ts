import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RollbackInfo
/** 
 * Information about a deployment rollback.
**/
export class RollbackInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=rollbackDeploymentId" })
  rollbackDeploymentId?: string;

  @Metadata({ data: "json, name=rollbackMessage" })
  rollbackMessage?: string;

  @Metadata({ data: "json, name=rollbackTriggeringDeploymentId" })
  rollbackTriggeringDeploymentId?: string;
}
