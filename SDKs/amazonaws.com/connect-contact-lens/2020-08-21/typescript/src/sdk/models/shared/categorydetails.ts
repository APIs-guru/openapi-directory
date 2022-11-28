import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PointOfInterest } from "./pointofinterest";



// CategoryDetails
/** 
 * Provides information about the category rule that was matched.
**/
export class CategoryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PointsOfInterest", elemType: PointOfInterest })
  pointsOfInterest: PointOfInterest[];
}
