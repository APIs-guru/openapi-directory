import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
**/
export declare class SelfManagedActiveDirectoryConfigurationUpdates extends SpeakeasyBase {
    dnsIps?: string[];
    password?: string;
    userName?: string;
}
