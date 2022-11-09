import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListOfferingTransactionsRequest
/** 
 * Represents the request to list the offering transaction history.
**/
export class ListOfferingTransactionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
