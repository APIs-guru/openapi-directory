package shared

type ListFhirDatastoresResponse struct {
	DatastorePropertiesList []DatastoreProperties `json:"DatastorePropertiesList"`
	NextToken               *string               `json:"NextToken,omitempty"`
}
