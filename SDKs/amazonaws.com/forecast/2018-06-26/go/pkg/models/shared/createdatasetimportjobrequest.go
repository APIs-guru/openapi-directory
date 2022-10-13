package shared

type CreateDatasetImportJobRequest struct {
	DataSource                DataSource `json:"DataSource"`
	DatasetArn                string     `json:"DatasetArn"`
	DatasetImportJobName      string     `json:"DatasetImportJobName"`
	GeolocationFormat         *string    `json:"GeolocationFormat"`
	Tags                      []Tag      `json:"Tags"`
	TimeZone                  *string    `json:"TimeZone"`
	TimestampFormat           *string    `json:"TimestampFormat"`
	UseGeolocationForTimeZone *bool      `json:"UseGeolocationForTimeZone"`
}
