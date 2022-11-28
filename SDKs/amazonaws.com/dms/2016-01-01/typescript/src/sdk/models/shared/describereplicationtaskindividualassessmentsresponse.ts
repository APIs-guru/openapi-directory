import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationTaskIndividualAssessment } from "./replicationtaskindividualassessment";



// DescribeReplicationTaskIndividualAssessmentsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskIndividualAssessmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIndividualAssessments", elemType: ReplicationTaskIndividualAssessment })
  replicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];
}
