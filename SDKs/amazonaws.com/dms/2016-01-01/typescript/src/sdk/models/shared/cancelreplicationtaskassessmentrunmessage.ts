import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CancelReplicationTaskAssessmentRunMessage
/** 
 * <p/>
**/
export class CancelReplicationTaskAssessmentRunMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRunArn" })
  replicationTaskAssessmentRunArn: string;
}
