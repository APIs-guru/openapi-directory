import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobQueueDetail } from "./jobqueuedetail";


export class DescribeJobQueuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobQueues", elemType: shared.JobQueueDetail })
  jobQueues?: JobQueueDetail[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
