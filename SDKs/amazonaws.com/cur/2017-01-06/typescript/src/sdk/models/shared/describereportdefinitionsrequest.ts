import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DescribeReportDefinitionsRequest
/** 
 * Requests a list of AWS Cost and Usage reports owned by the account.
**/
export class DescribeReportDefinitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
