import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude: number;

  @Metadata({ data: "json, name=longitude" })
  longitude: number;
}
