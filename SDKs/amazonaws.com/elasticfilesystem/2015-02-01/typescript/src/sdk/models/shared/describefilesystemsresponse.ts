import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileSystemDescription } from "./filesystemdescription";


export class DescribeFileSystemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FileSystems", elemType: shared.FileSystemDescription })
  fileSystems?: FileSystemDescription[];

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
