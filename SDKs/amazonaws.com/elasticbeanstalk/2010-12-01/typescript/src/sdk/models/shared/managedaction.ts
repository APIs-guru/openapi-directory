import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { ActionStatusEnum } from "./actionstatusenum";



// ManagedAction
/** 
 * The record of an upcoming or in-progress managed action.
**/
export class ManagedAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionDescription?: string;

  @SpeakeasyMetadata()
  actionId?: string;

  @SpeakeasyMetadata()
  actionType?: ActionTypeEnum;

  @SpeakeasyMetadata()
  status?: ActionStatusEnum;

  @SpeakeasyMetadata()
  windowStartTime?: Date;
}
