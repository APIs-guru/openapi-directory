import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSystemEndpoint
/** 
 * An Amazon FSx for NetApp ONTAP file system has two endpoints that are used to access data or to manage the file system using the NetApp ONTAP CLI, REST API, or NetApp SnapMirror. They are the <code>Management</code> and <code>Intercluster</code> endpoints.
**/
export class FileSystemEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @Metadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];
}
