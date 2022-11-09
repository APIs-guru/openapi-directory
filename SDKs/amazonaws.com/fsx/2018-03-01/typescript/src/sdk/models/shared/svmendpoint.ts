import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SvmEndpoint
/** 
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.
**/
export class SvmEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=DNSName" })
  dnsName?: string;

  @Metadata({ data: "json, name=IpAddresses" })
  ipAddresses?: string[];
}
