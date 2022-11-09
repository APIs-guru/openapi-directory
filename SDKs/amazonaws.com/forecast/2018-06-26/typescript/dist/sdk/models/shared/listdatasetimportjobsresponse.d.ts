import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetImportJobSummary } from "./datasetimportjobsummary";
export declare class ListDatasetImportJobsResponse extends SpeakeasyBase {
    datasetImportJobs?: DatasetImportJobSummary[];
    nextToken?: string;
}
