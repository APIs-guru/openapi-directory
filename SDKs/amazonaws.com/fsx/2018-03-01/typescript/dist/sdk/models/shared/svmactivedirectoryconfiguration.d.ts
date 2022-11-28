import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";
/**
 * Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
**/
export declare class SvmActiveDirectoryConfiguration extends SpeakeasyBase {
    netBiosName?: string;
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}
