import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";



// ApplyEnvironmentManagedActionResult
/** 
 * The result message containing information about the managed action.
**/
export class ApplyEnvironmentManagedActionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionDescription?: string;

  @SpeakeasyMetadata()
  actionId?: string;

  @SpeakeasyMetadata()
  actionType?: ActionTypeEnum;

  @SpeakeasyMetadata()
  status?: string;
}
