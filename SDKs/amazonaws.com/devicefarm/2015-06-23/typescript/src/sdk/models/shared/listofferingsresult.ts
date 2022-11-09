import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Offering } from "./offering";


// ListOfferingsResult
/** 
 * Represents the return values of the list of offerings.
**/
export class ListOfferingsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=offerings", elemType: shared.Offering })
  offerings?: Offering[];
}
