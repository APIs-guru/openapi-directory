import { SpeakeasyBase } from "../../../internal/utils";
import { FindingsReportSummary } from "./findingsreportsummary";
/**
 * The structure representing the GetFindingsReportAccountSummaryResponse.
**/
export declare class GetFindingsReportAccountSummaryResponse extends SpeakeasyBase {
    nextToken?: string;
    reportSummaries: FindingsReportSummary[];
}
