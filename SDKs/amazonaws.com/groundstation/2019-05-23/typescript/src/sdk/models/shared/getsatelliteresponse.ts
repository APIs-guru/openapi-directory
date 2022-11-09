import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetSatelliteResponse
/** 
 * <p/>
**/
export class GetSatelliteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=groundStations" })
  groundStations?: string[];

  @Metadata({ data: "json, name=noradSatelliteID" })
  noradSatelliteId?: number;

  @Metadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @Metadata({ data: "json, name=satelliteId" })
  satelliteId?: string;
}
