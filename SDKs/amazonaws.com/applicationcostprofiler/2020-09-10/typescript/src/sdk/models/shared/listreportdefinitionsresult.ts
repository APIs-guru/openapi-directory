import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportDefinition } from "./reportdefinition";


export class ListReportDefinitionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=reportDefinitions", elemType: shared.ReportDefinition })
  reportDefinitions?: ReportDefinition[];
}
