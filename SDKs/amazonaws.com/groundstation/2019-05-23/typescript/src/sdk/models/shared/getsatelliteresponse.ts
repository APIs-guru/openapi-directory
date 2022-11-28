import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetSatelliteResponse
/** 
 * <p/>
**/
export class GetSatelliteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groundStations" })
  groundStations?: string[];

  @SpeakeasyMetadata({ data: "json, name=noradSatelliteID" })
  noradSatelliteId?: number;

  @SpeakeasyMetadata({ data: "json, name=satelliteArn" })
  satelliteArn?: string;

  @SpeakeasyMetadata({ data: "json, name=satelliteId" })
  satelliteId?: string;
}
