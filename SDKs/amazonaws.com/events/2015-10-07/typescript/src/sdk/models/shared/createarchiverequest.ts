import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveName" })
  archiveName: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=EventSourceArn" })
  eventSourceArn: string;

  @SpeakeasyMetadata({ data: "json, name=RetentionDays" })
  retentionDays?: number;
}
