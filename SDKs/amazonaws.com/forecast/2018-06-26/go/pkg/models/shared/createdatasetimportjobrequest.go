package shared



type CreateDatasetImportJobRequest struct {
    DataSource DataSource `json:"DataSource"`
    DatasetArn string `json:"DatasetArn"`
    DatasetImportJobName string `json:"DatasetImportJobName"`
    GeolocationFormat *string `json:"GeolocationFormat,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    TimeZone *string `json:"TimeZone,omitempty"`
    TimestampFormat *string `json:"TimestampFormat,omitempty"`
    UseGeolocationForTimeZone *bool `json:"UseGeolocationForTimeZone,omitempty"`
    
}

