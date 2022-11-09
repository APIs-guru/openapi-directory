import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobDetail } from "./jobdetail";


export class DescribeJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobs", elemType: shared.JobDetail })
  jobs?: JobDetail[];
}
