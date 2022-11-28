import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Offering } from "./offering";



// ListOfferingsResult
/** 
 * Represents the return values of the list of offerings.
**/
export class ListOfferingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=offerings", elemType: Offering })
  offerings?: Offering[];
}
