import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetAccountSummaryResponse
/** 
 * Contains the response to a successful <a>GetAccountSummary</a> request. 
**/
export class GetAccountSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  summaryMap?: Map<string, number>;
}
