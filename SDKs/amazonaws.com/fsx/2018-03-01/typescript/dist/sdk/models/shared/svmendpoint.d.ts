import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Amazon FSx for NetApp ONTAP storage virtual machine (SVM) has four endpoints that are used to access data or to manage the SVM using the NetApp ONTAP CLI, REST API, or NetApp CloudManager. They are the <code>Iscsi</code>, <code>Management</code>, <code>Nfs</code>, and <code>Smb</code> endpoints.
**/
export declare class SvmEndpoint extends SpeakeasyBase {
    dnsName?: string;
    ipAddresses?: string[];
}
