import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetOfferingStatusRequest
/** 
 * Represents the request to retrieve the offering status for the specified customer or account.
**/
export class GetOfferingStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
