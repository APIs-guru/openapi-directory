import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GroundStationData
/** 
 * Information about the ground station data.
**/
export class GroundStationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groundStationId" })
  groundStationId?: string;

  @SpeakeasyMetadata({ data: "json, name=groundStationName" })
  groundStationName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
