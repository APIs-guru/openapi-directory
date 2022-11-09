import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SatelliteListItem
/** 
 * Item in a list of satellites.
**/
export class SatelliteListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=groundStations" })
  groundStations?: string[];

  @Metadata({ data: "json, name=noradSatelliteID" })
  noradSatelliteId?: number;

  @Metadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @Metadata({ data: "json, name=satelliteId" })
  satelliteId?: string;
}
