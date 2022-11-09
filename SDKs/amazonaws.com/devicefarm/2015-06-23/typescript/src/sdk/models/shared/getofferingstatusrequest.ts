import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GetOfferingStatusRequest
/** 
 * Represents the request to retrieve the offering status for the specified customer or account.
**/
export class GetOfferingStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
