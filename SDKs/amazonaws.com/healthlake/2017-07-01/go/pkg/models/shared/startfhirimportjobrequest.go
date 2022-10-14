package shared

type StartFhirImportJobRequest struct {
	ClientToken         string           `json:"ClientToken"`
	DataAccessRoleArn   string           `json:"DataAccessRoleArn"`
	DatastoreID         string           `json:"DatastoreId"`
	InputDataConfig     InputDataConfig  `json:"InputDataConfig"`
	JobName             *string          `json:"JobName,omitempty"`
	JobOutputDataConfig OutputDataConfig `json:"JobOutputDataConfig"`
}
