import { SpeakeasyBase } from "../../../internal/utils";
import { TestCaseFilter } from "./testcasefilter";
export declare class DescribeTestCasesInput extends SpeakeasyBase {
    filter?: TestCaseFilter;
    maxResults?: number;
    nextToken?: string;
    reportArn: string;
}
