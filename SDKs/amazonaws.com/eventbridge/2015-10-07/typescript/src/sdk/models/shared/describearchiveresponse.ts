import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchiveStateEnum } from "./archivestateenum";



export class DescribeArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveArn" })
  archiveArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ArchiveName" })
  archiveName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventCount" })
  eventCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionDays" })
  retentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=SizeBytes" })
  sizeBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: ArchiveStateEnum;

  @SpeakeasyMetadata({ data: "json, name=StateReason" })
  stateReason?: string;
}
