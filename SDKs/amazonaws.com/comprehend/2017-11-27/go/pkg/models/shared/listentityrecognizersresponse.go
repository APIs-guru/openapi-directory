package shared

type ListEntityRecognizersResponse struct {
	EntityRecognizerPropertiesList []EntityRecognizerProperties `json:"EntityRecognizerPropertiesList,omitempty"`
	NextToken                      *string                      `json:"NextToken,omitempty"`
}
