import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingsReportSummary } from "./findingsreportsummary";


// GetFindingsReportAccountSummaryResponse
/** 
 * The structure representing the GetFindingsReportAccountSummaryResponse.
**/
export class GetFindingsReportAccountSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportSummaries", elemType: shared.FindingsReportSummary })
  reportSummaries: FindingsReportSummary[];
}
