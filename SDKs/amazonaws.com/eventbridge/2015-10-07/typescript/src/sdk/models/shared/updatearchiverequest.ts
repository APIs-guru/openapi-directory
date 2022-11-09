import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateArchiveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveName" })
  archiveName: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EventPattern" })
  eventPattern?: string;

  @Metadata({ data: "json, name=RetentionDays" })
  retentionDays?: number;
}
