import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplicationTaskIndividualAssessment
/** 
 * Provides information that describes an individual assessment from a premigration assessment run.
**/
export class ReplicationTaskIndividualAssessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndividualAssessmentName" })
  individualAssessmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskAssessmentRunArn" })
  replicationTaskAssessmentRunArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIndividualAssessmentArn" })
  replicationTaskIndividualAssessmentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ReplicationTaskIndividualAssessmentStartDate" })
  replicationTaskIndividualAssessmentStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
