import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelBatchErrorCodeEnum } from "./cancelbatcherrorcodeenum";



// CancelSpotFleetRequestsError
/** 
 * Describes a Spot Fleet error.
**/
export class CancelSpotFleetRequestsError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: CancelBatchErrorCodeEnum;

  @SpeakeasyMetadata()
  message?: string;
}
