import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeleteQueuedReservedInstancesErrorCodeEnum } from "./deletequeuedreservedinstanceserrorcodeenum";



// DeleteQueuedReservedInstancesError
/** 
 * Describes the error for a Reserved Instance whose queued purchase could not be deleted.
**/
export class DeleteQueuedReservedInstancesError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: DeleteQueuedReservedInstancesErrorCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
