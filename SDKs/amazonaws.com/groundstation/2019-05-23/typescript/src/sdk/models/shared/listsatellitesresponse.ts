import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SatelliteListItem } from "./satellitelistitem";



// ListSatellitesResponse
/** 
 * <p/>
**/
export class ListSatellitesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=satellites", elemType: SatelliteListItem })
  satellites?: SatelliteListItem[];
}
