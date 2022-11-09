import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GroundStationData } from "./groundstationdata";


// ListGroundStationsResponse
/** 
 * <p/>
**/
export class ListGroundStationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groundStationList", elemType: shared.GroundStationData })
  groundStationList?: GroundStationData[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
