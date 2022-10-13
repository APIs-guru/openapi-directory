package shared

type EntityRecognizerInputDataConfig struct {
	Annotations        *EntityRecognizerAnnotations    `json:"Annotations"`
	AugmentedManifests []AugmentedManifestsListItem    `json:"AugmentedManifests"`
	DataFormat         *EntityRecognizerDataFormatEnum `json:"DataFormat"`
	Documents          *EntityRecognizerDocuments      `json:"Documents"`
	EntityList         *EntityRecognizerEntityList     `json:"EntityList"`
	EntityTypes        []EntityTypesListItem           `json:"EntityTypes"`
}
