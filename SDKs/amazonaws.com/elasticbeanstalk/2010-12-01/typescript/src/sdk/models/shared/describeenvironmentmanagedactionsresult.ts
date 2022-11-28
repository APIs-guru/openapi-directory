import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedAction } from "./managedaction";



// DescribeEnvironmentManagedActionsResult
/** 
 * The result message containing a list of managed actions.
**/
export class DescribeEnvironmentManagedActionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ManagedAction })
  managedActions?: ManagedAction[];
}
