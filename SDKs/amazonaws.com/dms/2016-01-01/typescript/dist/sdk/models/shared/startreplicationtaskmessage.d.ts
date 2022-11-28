import { SpeakeasyBase } from "../../../internal/utils";
import { StartReplicationTaskTypeValueEnum } from "./startreplicationtasktypevalueenum";
/**
 * <p/>
**/
export declare class StartReplicationTaskMessage extends SpeakeasyBase {
    cdcStartPosition?: string;
    cdcStartTime?: Date;
    cdcStopPosition?: string;
    replicationTaskArn: string;
    startReplicationTaskType: StartReplicationTaskTypeValueEnum;
}
