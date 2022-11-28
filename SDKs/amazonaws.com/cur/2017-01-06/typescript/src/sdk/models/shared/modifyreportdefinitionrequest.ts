import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";



export class ModifyReportDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReportDefinition" })
  reportDefinition: ReportDefinition;

  @SpeakeasyMetadata({ data: "json, name=ReportName" })
  reportName: string;
}
