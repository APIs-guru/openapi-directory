import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListOfferingTransactionsRequest
/** 
 * Represents the request to list the offering transaction history.
**/
export class ListOfferingTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
