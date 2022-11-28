import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfManagedActiveDirectoryConfigurationUpdates
/** 
 * The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
**/
export class SelfManagedActiveDirectoryConfigurationUpdates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DnsIps" })
  dnsIps?: string[];

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;
}
