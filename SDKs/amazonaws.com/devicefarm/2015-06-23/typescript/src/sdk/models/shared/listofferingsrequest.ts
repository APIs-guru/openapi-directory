import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOfferingsRequest
/** 
 * Represents the request to list all offerings.
**/
export class ListOfferingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
