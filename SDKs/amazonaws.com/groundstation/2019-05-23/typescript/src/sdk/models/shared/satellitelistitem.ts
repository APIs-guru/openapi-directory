import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SatelliteListItem
/** 
 * Item in a list of satellites.
**/
export class SatelliteListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groundStations" })
  groundStations?: string[];

  @SpeakeasyMetadata({ data: "json, name=noradSatelliteID" })
  noradSatelliteId?: number;

  @SpeakeasyMetadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @SpeakeasyMetadata({ data: "json, name=satelliteId" })
  satelliteId?: string;
}
