import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfManagedActiveDirectoryConfigurationUpdates
/** 
 * The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
**/
export class SelfManagedActiveDirectoryConfigurationUpdates extends SpeakeasyBase {
  @Metadata({ data: "json, name=DnsIps" })
  dnsIps?: string[];

  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;
}
