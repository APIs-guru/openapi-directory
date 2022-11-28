import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";



// CreateSvmActiveDirectoryConfiguration
/** 
 * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
**/
export class CreateSvmActiveDirectoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NetBiosName" })
  netBiosName: string;

  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
}
