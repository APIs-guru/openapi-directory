import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";



export class ListReportDefinitionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reportDefinitions", elemType: ReportDefinition })
  reportDefinitions?: ReportDefinition[];
}
