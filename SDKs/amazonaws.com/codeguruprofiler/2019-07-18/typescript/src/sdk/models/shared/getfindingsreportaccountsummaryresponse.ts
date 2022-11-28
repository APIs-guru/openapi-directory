import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingsReportSummary } from "./findingsreportsummary";



// GetFindingsReportAccountSummaryResponse
/** 
 * The structure representing the GetFindingsReportAccountSummaryResponse.
**/
export class GetFindingsReportAccountSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportSummaries", elemType: FindingsReportSummary })
  reportSummaries: FindingsReportSummary[];
}
