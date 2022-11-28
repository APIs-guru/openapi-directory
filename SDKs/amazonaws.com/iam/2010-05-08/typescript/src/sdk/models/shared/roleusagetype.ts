import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoleUsageType
/** 
 * <p>An object that contains details about how a service-linked role is used, if that information is returned by the service.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
**/
export class RoleUsageType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  region?: string;

  @SpeakeasyMetadata()
  resources?: string[];
}
