package shared

import (
	"time"
)

type ReplicationTaskIndividualAssessment struct {
	IndividualAssessmentName                     *string    `json:"IndividualAssessmentName"`
	ReplicationTaskAssessmentRunArn              *string    `json:"ReplicationTaskAssessmentRunArn"`
	ReplicationTaskIndividualAssessmentArn       *string    `json:"ReplicationTaskIndividualAssessmentArn"`
	ReplicationTaskIndividualAssessmentStartDate *time.Time `json:"ReplicationTaskIndividualAssessmentStartDate"`
	Status                                       *string    `json:"Status"`
}
