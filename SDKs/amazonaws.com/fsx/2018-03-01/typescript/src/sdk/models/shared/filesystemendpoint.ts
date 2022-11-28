import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileSystemEndpoint
/** 
 * An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.
**/
export class FileSystemEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];
}
