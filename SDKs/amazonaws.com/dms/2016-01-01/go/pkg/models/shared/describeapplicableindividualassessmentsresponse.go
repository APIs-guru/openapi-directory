package shared

type DescribeApplicableIndividualAssessmentsResponse struct {
	IndividualAssessmentNames []string `json:"IndividualAssessmentNames"`
	Marker                    *string  `json:"Marker"`
}
