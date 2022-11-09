import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportJobProperties } from "./importjobproperties";
export declare class ListFhirImportJobsResponse extends SpeakeasyBase {
    importJobPropertiesList: ImportJobProperties[];
    nextToken?: string;
}
