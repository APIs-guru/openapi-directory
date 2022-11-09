import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationTaskIndividualAssessment } from "./replicationtaskindividualassessment";


// DescribeReplicationTaskIndividualAssessmentsResponse
/** 
 * <p/>
**/
export class DescribeReplicationTaskIndividualAssessmentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=ReplicationTaskIndividualAssessments", elemType: shared.ReplicationTaskIndividualAssessment })
  replicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];
}
