import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";


// SvmActiveDirectoryConfiguration
/** 
 * Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
**/
export class SvmActiveDirectoryConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=NetBiosName" })
  netBiosName?: string;

  @Metadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}
