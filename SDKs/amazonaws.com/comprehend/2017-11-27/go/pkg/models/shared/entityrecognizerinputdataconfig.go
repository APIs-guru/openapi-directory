package shared

// EntityRecognizerInputDataConfig
// Specifies the format and location of the input data.
type EntityRecognizerInputDataConfig struct {
	Annotations        *EntityRecognizerAnnotations    `json:"Annotations,omitempty"`
	AugmentedManifests []AugmentedManifestsListItem    `json:"AugmentedManifests,omitempty"`
	DataFormat         *EntityRecognizerDataFormatEnum `json:"DataFormat,omitempty"`
	Documents          *EntityRecognizerDocuments      `json:"Documents,omitempty"`
	EntityList         *EntityRecognizerEntityList     `json:"EntityList,omitempty"`
	EntityTypes        []EntityTypesListItem           `json:"EntityTypes"`
}
