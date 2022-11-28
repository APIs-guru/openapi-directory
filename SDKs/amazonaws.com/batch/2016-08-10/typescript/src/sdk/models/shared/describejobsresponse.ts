import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobDetail } from "./jobdetail";



export class DescribeJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobDetail })
  jobs?: JobDetail[];
}
