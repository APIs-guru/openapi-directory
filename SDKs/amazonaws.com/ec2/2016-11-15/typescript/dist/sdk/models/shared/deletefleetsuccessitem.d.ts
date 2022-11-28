import { SpeakeasyBase } from "../../../internal/utils";
import { FleetStateCodeEnum } from "./fleetstatecodeenum";
/**
 * Describes an EC2 Fleet that was successfully deleted.
**/
export declare class DeleteFleetSuccessItem extends SpeakeasyBase {
    currentFleetState?: FleetStateCodeEnum;
    fleetId?: string;
    previousFleetState?: FleetStateCodeEnum;
}
