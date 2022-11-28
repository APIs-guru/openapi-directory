import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryConfiguration } from "./selfmanagedactivedirectoryconfiguration";
/**
 * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.
**/
export declare class CreateSvmActiveDirectoryConfiguration extends SpeakeasyBase {
    netBiosName: string;
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
}
