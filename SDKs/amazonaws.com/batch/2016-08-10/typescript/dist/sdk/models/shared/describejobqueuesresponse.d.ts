import { SpeakeasyBase } from "../../../internal/utils";
import { JobQueueDetail } from "./jobqueuedetail";
export declare class DescribeJobQueuesResponse extends SpeakeasyBase {
    jobQueues?: JobQueueDetail[];
    nextToken?: string;
}
