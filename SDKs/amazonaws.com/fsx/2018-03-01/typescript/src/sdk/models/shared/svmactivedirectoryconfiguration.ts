import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";



// SvmActiveDirectoryConfiguration
/** 
 * Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
**/
export class SvmActiveDirectoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NetBiosName" })
  netBiosName?: string;

  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}
