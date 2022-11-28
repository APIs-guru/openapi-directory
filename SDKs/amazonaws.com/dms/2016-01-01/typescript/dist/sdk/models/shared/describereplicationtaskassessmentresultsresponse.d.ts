import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskAssessmentResult } from "./replicationtaskassessmentresult";
/**
 * <p/>
**/
export declare class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
    bucketName?: string;
    marker?: string;
    replicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}
