import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StartReplicationTaskTypeValueEnum } from "./startreplicationtasktypevalueenum";


// StartReplicationTaskMessage
/** 
 * <p/>
**/
export class StartReplicationTaskMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=CdcStartPosition" })
  cdcStartPosition?: string;

  @Metadata({ data: "json, name=CdcStartTime" })
  cdcStartTime?: Date;

  @Metadata({ data: "json, name=CdcStopPosition" })
  cdcStopPosition?: string;

  @Metadata({ data: "json, name=ReplicationTaskArn" })
  replicationTaskArn: string;

  @Metadata({ data: "json, name=StartReplicationTaskType" })
  startReplicationTaskType: StartReplicationTaskTypeValueEnum;
}
