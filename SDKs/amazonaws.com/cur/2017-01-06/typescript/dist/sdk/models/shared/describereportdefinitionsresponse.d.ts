import { SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";
/**
 * If the action is successful, the service sends back an HTTP 200 response.
**/
export declare class DescribeReportDefinitionsResponse extends SpeakeasyBase {
    nextToken?: string;
    reportDefinitions?: ReportDefinition[];
}
