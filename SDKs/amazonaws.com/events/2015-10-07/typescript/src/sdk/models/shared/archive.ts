import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArchiveStateEnum } from "./archivestateenum";


// Archive
/** 
 * An <code>Archive</code> object that contains details about an archive.
**/
export class Archive extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveName" })
  archiveName?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=EventCount" })
  eventCount?: number;

  @Metadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @Metadata({ data: "json, name=RetentionDays" })
  retentionDays?: number;

  @Metadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @Metadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;

  @Metadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
