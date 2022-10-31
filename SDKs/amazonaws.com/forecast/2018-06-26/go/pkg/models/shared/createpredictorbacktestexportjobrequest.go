package shared



type CreatePredictorBacktestExportJobRequest struct {
    Destination DataDestination `json:"Destination"`
    PredictorArn string `json:"PredictorArn"`
    PredictorBacktestExportJobName string `json:"PredictorBacktestExportJobName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

