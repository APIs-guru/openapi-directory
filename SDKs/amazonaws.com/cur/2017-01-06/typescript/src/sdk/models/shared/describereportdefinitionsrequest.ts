import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeReportDefinitionsRequest
/** 
 * Requests a list of AWS Cost and Usage reports owned by the account.
**/
export class DescribeReportDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
