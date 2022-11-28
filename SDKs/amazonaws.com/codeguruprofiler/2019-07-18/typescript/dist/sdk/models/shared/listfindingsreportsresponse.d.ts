import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsReportSummary } from "./findingsreportsummary";
/**
 * The structure representing the ListFindingsReportsResponse.
**/
export declare class ListFindingsReportsResponse extends SpeakeasyBase {
    findingsReportSummaries: FindingsReportSummary[];
    nextToken?: string;
}
