import { SpeakeasyBase } from "../../../internal/utils";
import { RoleUsageType } from "./roleusagetype";
/**
 * <p>The reason that the service-linked role deletion failed.</p> <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
**/
export declare class DeletionTaskFailureReasonType extends SpeakeasyBase {
    reason?: string;
    roleUsageList?: RoleUsageType[];
}
