import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";
import { SnapshotTypeEnum } from "./snapshottypeenum";



// Snapshot
/** 
 * Describes a directory snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DirectoryId" })
  directoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SnapshotStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: SnapshotTypeEnum;
}
