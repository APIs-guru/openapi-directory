import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";



// PutReportDefinitionRequest
/** 
 * Creates a Cost and Usage Report.
**/
export class PutReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportDefinition" })
  reportDefinition: ReportDefinition;
}
