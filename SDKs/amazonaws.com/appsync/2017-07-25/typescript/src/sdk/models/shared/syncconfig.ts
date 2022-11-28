import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConflictDetectionTypeEnum } from "./conflictdetectiontypeenum";
import { ConflictHandlerTypeEnum } from "./conflicthandlertypeenum";
import { LambdaConflictHandlerConfig } from "./lambdaconflicthandlerconfig";



// SyncConfig
/** 
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export class SyncConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conflictDetection" })
  conflictDetection?: ConflictDetectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=conflictHandler" })
  conflictHandler?: ConflictHandlerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lambdaConflictHandlerConfig" })
  lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
