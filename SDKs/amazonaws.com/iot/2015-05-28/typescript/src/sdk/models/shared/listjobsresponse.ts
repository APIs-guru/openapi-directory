import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobSummary } from "./jobsummary";


export class ListJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.JobSummary })
  jobs?: JobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
