import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StartReplicationTaskTypeValueEnum } from "./startreplicationtasktypevalueenum";



// StartReplicationTaskMessage
/** 
 * <p/>
**/
export class StartReplicationTaskMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @SpeakeasyMetadata({ data: "json, name=StartReplicationTaskType" })
  startReplicationTaskType: StartReplicationTaskTypeValueEnum;
}
