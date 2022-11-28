import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeBudgetsRequest
/** 
 *  Request of DescribeBudgets 
**/
export class DescribeBudgetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
