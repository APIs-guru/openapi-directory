import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleUsageType } from "./roleusagetype";



// DeletionTaskFailureReasonType
/** 
 * <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
**/
export class DeletionTaskFailureReasonType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  reason?: string;

  @SpeakeasyMetadata({ elemType: RoleUsageType })
  roleUsageList?: RoleUsageType[];
}
