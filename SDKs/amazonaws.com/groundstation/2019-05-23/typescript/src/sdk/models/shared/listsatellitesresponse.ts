import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SatelliteListItem } from "./satellitelistitem";


// ListSatellitesResponse
/** 
 * <p/>
**/
export class ListSatellitesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=satellites", elemType: shared.SatelliteListItem })
  satellites?: SatelliteListItem[];
}
