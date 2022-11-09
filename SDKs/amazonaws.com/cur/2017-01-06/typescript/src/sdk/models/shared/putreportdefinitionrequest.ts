import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportDefinition } from "./reportdefinition";


// PutReportDefinitionRequest
/** 
 * Creates a Cost and Usage Report.
**/
export class PutReportDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportDefinition" })
  reportDefinition: ReportDefinition;
}
