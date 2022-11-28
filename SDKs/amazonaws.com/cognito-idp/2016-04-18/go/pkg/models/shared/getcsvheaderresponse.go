package shared

// GetCsvHeaderResponse
// Represents the response from the server to the request to get the header information for the .csv file for the user import job.
type GetCsvHeaderResponse struct {
	CsvHeader  []string `json:"CSVHeader,omitempty"`
	UserPoolID *string  `json:"UserPoolId,omitempty"`
}
