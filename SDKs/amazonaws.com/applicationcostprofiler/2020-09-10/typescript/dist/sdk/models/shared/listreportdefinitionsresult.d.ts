import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportDefinition } from "./reportdefinition";
export declare class ListReportDefinitionsResult extends SpeakeasyBase {
    nextToken?: string;
    reportDefinitions?: ReportDefinition[];
}
