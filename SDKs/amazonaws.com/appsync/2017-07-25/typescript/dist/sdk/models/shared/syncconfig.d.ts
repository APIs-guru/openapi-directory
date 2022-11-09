import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConflictDetectionTypeEnum } from "./conflictdetectiontypeenum";
import { ConflictHandlerTypeEnum } from "./conflicthandlertypeenum";
import { LambdaConflictHandlerConfig } from "./lambdaconflicthandlerconfig";
/**
 * <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
**/
export declare class SyncConfig extends SpeakeasyBase {
    conflictDetection?: ConflictDetectionTypeEnum;
    conflictHandler?: ConflictHandlerTypeEnum;
    lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
}
