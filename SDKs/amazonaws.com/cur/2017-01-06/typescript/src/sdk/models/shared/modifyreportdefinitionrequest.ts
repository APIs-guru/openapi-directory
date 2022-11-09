import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportDefinition } from "./reportdefinition";


export class ModifyReportDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ReportDefinition" })
  reportDefinition: ReportDefinition;

  @Metadata({ data: "json, name=ReportName" })
  reportName: string;
}
