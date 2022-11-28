import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Requests a list of AWS Cost and Usage reports owned by the account.
**/
export declare class DescribeReportDefinitionsRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
