package shared

type GetCsvHeaderResponse struct {
	CsvHeader  []string `json:"CSVHeader"`
	UserPoolID *string  `json:"UserPoolId"`
}
