import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationTaskAssessmentResult } from "./replicationtaskassessmentresult";
/**
 * <p/>
**/
export declare class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
    bucketName?: string;
    marker?: string;
    replicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}
