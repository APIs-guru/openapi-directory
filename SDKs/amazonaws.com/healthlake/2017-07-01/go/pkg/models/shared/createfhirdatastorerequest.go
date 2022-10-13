package shared

type CreateFhirDatastoreRequest struct {
	ClientToken          *string            `json:"ClientToken"`
	DatastoreName        *string            `json:"DatastoreName"`
	DatastoreTypeVersion FhirVersionEnum    `json:"DatastoreTypeVersion"`
	PreloadDataConfig    *PreloadDataConfig `json:"PreloadDataConfig"`
	SseConfiguration     *SseConfiguration  `json:"SseConfiguration"`
	Tags                 []Tag              `json:"Tags"`
}
