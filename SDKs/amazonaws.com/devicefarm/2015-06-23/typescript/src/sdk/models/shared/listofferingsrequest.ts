import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListOfferingsRequest
/** 
 * Represents the request to list all offerings.
**/
export class ListOfferingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
