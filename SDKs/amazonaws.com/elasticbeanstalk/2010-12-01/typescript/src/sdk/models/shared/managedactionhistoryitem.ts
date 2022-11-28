import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { FailureTypeEnum } from "./failuretypeenum";
import { ActionHistoryStatusEnum } from "./actionhistorystatusenum";



// ManagedActionHistoryItem
/** 
 * The record of a completed or failed managed action.
**/
export class ManagedActionHistoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionDescription?: string;

  @SpeakeasyMetadata()
  actionId?: string;

  @SpeakeasyMetadata()
  actionType?: ActionTypeEnum;

  @SpeakeasyMetadata()
  executedTime?: Date;

  @SpeakeasyMetadata()
  failureDescription?: string;

  @SpeakeasyMetadata()
  failureType?: FailureTypeEnum;

  @SpeakeasyMetadata()
  finishedTime?: Date;

  @SpeakeasyMetadata()
  status?: ActionHistoryStatusEnum;
}
