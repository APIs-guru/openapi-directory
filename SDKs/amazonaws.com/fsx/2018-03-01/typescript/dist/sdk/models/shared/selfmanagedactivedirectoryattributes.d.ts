import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
**/
export declare class SelfManagedActiveDirectoryAttributes extends SpeakeasyBase {
    dnsIps?: string[];
    domainName?: string;
    fileSystemAdministratorsGroup?: string;
    organizationalUnitDistinguishedName?: string;
    userName?: string;
}
