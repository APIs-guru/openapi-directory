package shared



type CreateFhirDatastoreRequest struct {
    ClientToken *string `json:"ClientToken,omitempty"`
    DatastoreName *string `json:"DatastoreName,omitempty"`
    DatastoreTypeVersion FhirVersionEnum `json:"DatastoreTypeVersion"`
    PreloadDataConfig *PreloadDataConfig `json:"PreloadDataConfig,omitempty"`
    SseConfiguration *SseConfiguration `json:"SseConfiguration,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

