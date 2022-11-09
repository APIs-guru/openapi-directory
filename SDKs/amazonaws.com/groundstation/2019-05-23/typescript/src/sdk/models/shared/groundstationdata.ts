import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroundStationData
/** 
 * Information about the ground station data.
**/
export class GroundStationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groundStationId" })
  groundStationId?: string;

  @Metadata({ data: "json, name=groundStationName" })
  groundStationName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
