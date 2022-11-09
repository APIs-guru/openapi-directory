import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";
import { SnapshotTypeEnum } from "./snapshottypeenum";


// Snapshot
/** 
 * Describes a directory snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: SnapshotStatusEnum;

  @Metadata({ data: "json, name=Type" })
  type?: SnapshotTypeEnum;
}
