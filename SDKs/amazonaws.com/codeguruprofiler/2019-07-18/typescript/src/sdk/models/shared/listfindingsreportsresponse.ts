import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FindingsReportSummary } from "./findingsreportsummary";


// ListFindingsReportsResponse
/** 
 * The structure representing the ListFindingsReportsResponse.
**/
export class ListFindingsReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingsReportSummaries", elemType: shared.FindingsReportSummary })
  findingsReportSummaries: FindingsReportSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
