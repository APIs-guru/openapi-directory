import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileSystemEndpoint } from "./filesystemendpoint";
import { FileSystemEndpoint } from "./filesystemendpoint";


// FileSystemEndpoints
/** 
 * An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
**/
export class FileSystemEndpoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=Intercluster" })
  intercluster?: FileSystemEndpoint;

  @Metadata({ data: "json, name=Management" })
  management?: FileSystemEndpoint;
}
