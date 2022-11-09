import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteArchiveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveName" })
  archiveName: string;
}
