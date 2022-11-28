import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteReportDefinitionRequest
/** 
 * Deletes the specified report.
**/
export class DeleteReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportName" })
  reportName?: string;
}
