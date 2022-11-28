import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationState } from "./locationstate";
import { FleetActionEnum } from "./fleetactionenum";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";



// LocationAttributes
/** 
 * <p>Represents a location in a multi-location fleet.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetLocationAttributes</a> </p>
**/
export class LocationAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LocationState" })
  locationState?: LocationState;

  @SpeakeasyMetadata({ data: "json, name=StoppedActions" })
  stoppedActions?: FleetActionEnum[];

  @SpeakeasyMetadata({ data: "json, name=UpdateStatus" })
  updateStatus?: LocationUpdateStatusEnum;
}
