package shared



type DescribeTableDataImportJobResult struct {
    JobMetadata TableDataImportJobMetadata `json:"jobMetadata"`
    JobStatus TableDataImportJobStatusEnum `json:"jobStatus"`
    Message string `json:"message"`
    
}

