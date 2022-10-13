package shared

type FileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{} `json:"jsonConfiguration"`
	ParquetConfiguration *ParquetConfiguration  `json:"parquetConfiguration"`
}
