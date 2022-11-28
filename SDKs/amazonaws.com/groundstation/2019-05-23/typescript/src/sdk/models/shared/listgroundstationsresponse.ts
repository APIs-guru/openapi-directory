import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroundStationData } from "./groundstationdata";



// ListGroundStationsResponse
/** 
 * <p/>
**/
export class ListGroundStationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groundStationList", elemType: GroundStationData })
  groundStationList?: GroundStationData[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
