import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ReplicationTaskIndividualAssessment
/** 
 * Provides information that describes an individual assessment from a premigration assessment run.
**/
export class ReplicationTaskIndividualAssessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndividualAssessmentName" })
  individualAssessmentName?: string;

  @Metadata({ data: "json, name=ReplicationTaskAssessmentRunArn" })
  replicationTaskAssessmentRunArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskIndividualAssessmentArn" })
  replicationTaskIndividualAssessmentArn?: string;

  @Metadata({ data: "json, name=ReplicationTaskIndividualAssessmentStartDate" })
  replicationTaskIndividualAssessmentStartDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
