import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArchiveName" })
  archiveName: string;
}
