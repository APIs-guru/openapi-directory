import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./selfmanagedactivedirectoryconfigurationupdates";
/**
 * Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Pleae note, account credentials are not returned in the response payload.
**/
export declare class UpdateSvmActiveDirectoryConfiguration extends SpeakeasyBase {
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
}
