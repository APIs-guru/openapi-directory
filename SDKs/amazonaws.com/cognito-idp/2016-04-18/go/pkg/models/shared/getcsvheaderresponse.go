package shared

type GetCsvHeaderResponse struct {
	CsvHeader  []string `json:"CSVHeader,omitempty"`
	UserPoolID *string  `json:"UserPoolId,omitempty"`
}
