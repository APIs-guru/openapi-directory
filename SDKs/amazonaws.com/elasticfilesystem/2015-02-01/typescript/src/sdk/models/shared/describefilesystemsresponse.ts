import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileSystemDescription } from "./filesystemdescription";



export class DescribeFileSystemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FileSystems", elemType: FileSystemDescription })
  fileSystems?: FileSystemDescription[];

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
