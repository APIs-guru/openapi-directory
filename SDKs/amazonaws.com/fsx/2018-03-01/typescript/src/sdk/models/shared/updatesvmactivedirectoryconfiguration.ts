import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryConfigurationUpdates } from "./selfmanagedactivedirectoryconfigurationupdates";



// UpdateSvmActiveDirectoryConfiguration
/** 
 * Updates the Microsoft Active Directory (AD) configuration of an SVM joined to an AD. Pleae note, account credentials are not returned in the response payload.
**/
export class UpdateSvmActiveDirectoryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SelfManagedActiveDirectoryConfiguration" })
  selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationUpdates;
}
