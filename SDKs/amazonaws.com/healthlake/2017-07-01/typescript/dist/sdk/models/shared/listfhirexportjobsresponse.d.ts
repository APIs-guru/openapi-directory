import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobProperties } from "./exportjobproperties";
export declare class ListFhirExportJobsResponse extends SpeakeasyBase {
    exportJobPropertiesList: ExportJobProperties[];
    nextToken?: string;
}
