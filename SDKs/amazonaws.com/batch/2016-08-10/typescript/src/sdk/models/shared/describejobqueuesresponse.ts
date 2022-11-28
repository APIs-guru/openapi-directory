import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobQueueDetail } from "./jobqueuedetail";



export class DescribeJobQueuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobQueues", elemType: JobQueueDetail })
  jobQueues?: JobQueueDetail[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
