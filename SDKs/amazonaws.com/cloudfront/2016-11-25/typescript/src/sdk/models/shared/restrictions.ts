import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoRestriction } from "./georestriction";



// Restrictions
/** 
 * A complex type that identifies ways in which you want to restrict distribution of your content.
**/
export class Restrictions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  geoRestriction: GeoRestriction;
}
