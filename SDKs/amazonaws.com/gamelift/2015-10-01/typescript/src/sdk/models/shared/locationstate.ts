import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FleetStatusEnum } from "./fleetstatusenum";


// LocationState
/** 
 * <p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>CreateFleetLocations</a> | <a>DeleteFleetLocations</a> </p>
**/
export class LocationState extends SpeakeasyBase {
  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=Status" })
  status?: FleetStatusEnum;
}
