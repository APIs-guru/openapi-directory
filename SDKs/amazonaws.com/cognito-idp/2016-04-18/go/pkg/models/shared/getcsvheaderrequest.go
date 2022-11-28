package shared

// GetCsvHeaderRequest
// Represents the request to get the header information for the .csv file for the user import job.
type GetCsvHeaderRequest struct {
	UserPoolID string `json:"UserPoolId"`
}
