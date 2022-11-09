import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeBudgetsRequest
/** 
 *  Request of DescribeBudgets 
**/
export class DescribeBudgetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
