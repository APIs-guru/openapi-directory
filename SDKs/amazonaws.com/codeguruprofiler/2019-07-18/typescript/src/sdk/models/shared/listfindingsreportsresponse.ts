import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FindingsReportSummary } from "./findingsreportsummary";



// ListFindingsReportsResponse
/** 
 * The structure representing the ListFindingsReportsResponse.
**/
export class ListFindingsReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingsReportSummaries", elemType: FindingsReportSummary })
  findingsReportSummaries: FindingsReportSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
