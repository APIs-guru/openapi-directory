import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetImportJobSummary } from "./datasetimportjobsummary";



export class ListDatasetImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetImportJobs", elemType: DatasetImportJobSummary })
  datasetImportJobs?: DatasetImportJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
