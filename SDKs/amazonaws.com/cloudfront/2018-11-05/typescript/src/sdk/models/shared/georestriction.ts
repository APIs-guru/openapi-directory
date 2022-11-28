import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoRestrictionTypeEnum } from "./georestrictiontypeenum";



// GeoRestriction
/** 
 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
**/
export class GeoRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  items?: string[];

  @SpeakeasyMetadata()
  quantity: number;

  @SpeakeasyMetadata()
  restrictionType: GeoRestrictionTypeEnum;
}
