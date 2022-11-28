import { SpeakeasyBase } from "../../../internal/utils";
import { FileSystemEndpoint } from "./filesystemendpoint";
/**
 * An Amazon FSx for NetApp ONTAP file system has the following endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror.
**/
export declare class FileSystemEndpoints extends SpeakeasyBase {
    intercluster?: FileSystemEndpoint;
    management?: FileSystemEndpoint;
}
