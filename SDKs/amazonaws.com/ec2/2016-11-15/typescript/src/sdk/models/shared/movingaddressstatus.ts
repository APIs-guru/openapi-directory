import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MoveStatusEnum } from "./movestatusenum";



// MovingAddressStatus
/** 
 * Describes the status of a moving Elastic IP address.
**/
export class MovingAddressStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  moveStatus?: MoveStatusEnum;

  @SpeakeasyMetadata()
  publicIp?: string;
}
