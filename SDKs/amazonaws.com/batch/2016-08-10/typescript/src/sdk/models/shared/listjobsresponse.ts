import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobSummary } from "./jobsummary";


export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobSummaryList", elemType: shared.JobSummary })
  jobSummaryList: JobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
