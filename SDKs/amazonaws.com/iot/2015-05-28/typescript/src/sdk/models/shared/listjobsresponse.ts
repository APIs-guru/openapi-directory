import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobSummary } from "./jobsummary";



export class ListJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobSummary })
  jobs?: JobSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
