import { SpeakeasyBase } from "../../../internal/utils";
import { GeoRestrictionTypeEnum } from "./georestrictiontypeenum";
/**
 * A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases.
**/
export declare class GeoRestriction extends SpeakeasyBase {
    items?: string[];
    quantity: number;
    restrictionType: GeoRestrictionTypeEnum;
}
