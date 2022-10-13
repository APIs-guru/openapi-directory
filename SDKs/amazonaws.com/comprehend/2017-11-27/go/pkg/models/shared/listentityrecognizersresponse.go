package shared

type ListEntityRecognizersResponse struct {
	EntityRecognizerPropertiesList []EntityRecognizerProperties `json:"EntityRecognizerPropertiesList"`
	NextToken                      *string                      `json:"NextToken"`
}
