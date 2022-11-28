import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveName" })
  archiveName: string;
}
