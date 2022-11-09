import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeArchiveRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArchiveName" })
  archiveName: string;
}
