import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteReportDefinitionRequest
/** 
 * Deletes the specified report.
**/
export class DeleteReportDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportName" })
  reportName?: string;
}
