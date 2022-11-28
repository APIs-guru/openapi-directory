import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FleetStateCodeEnum } from "./fleetstatecodeenum";



// DeleteFleetSuccessItem
/** 
 * Describes an EC2 Fleet that was successfully deleted.
**/
export class DeleteFleetSuccessItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currentFleetState?: FleetStateCodeEnum;

  @SpeakeasyMetadata()
  fleetId?: string;

  @SpeakeasyMetadata()
  previousFleetState?: FleetStateCodeEnum;
}
