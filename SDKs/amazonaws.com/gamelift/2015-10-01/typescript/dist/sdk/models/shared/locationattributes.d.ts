import { SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";
import { FleetActionEnum } from "./fleetactionenum";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
/**
 * <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
**/
export declare class LocationAttributes extends SpeakeasyBase {
    locationState?: LocationState;
    stoppedActions?: FleetActionEnum[];
    updateStatus?: LocationUpdateStatusEnum;
}
