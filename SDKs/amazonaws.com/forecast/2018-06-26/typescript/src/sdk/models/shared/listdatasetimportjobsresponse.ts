import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetImportJobSummary } from "./datasetimportjobsummary";


export class ListDatasetImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetImportJobs", elemType: shared.DatasetImportJobSummary })
  datasetImportJobs?: DatasetImportJobSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
