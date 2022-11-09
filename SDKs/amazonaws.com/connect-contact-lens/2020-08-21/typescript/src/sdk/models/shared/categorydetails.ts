import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PointOfInterest } from "./pointofinterest";


// CategoryDetails
/** 
 * Provides information about the category rule that was matched.
**/
export class CategoryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=PointsOfInterest", elemType: shared.PointOfInterest })
  pointsOfInterest: PointOfInterest[];
}
