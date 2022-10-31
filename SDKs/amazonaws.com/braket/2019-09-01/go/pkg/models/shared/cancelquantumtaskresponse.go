package shared



type CancelQuantumTaskResponse struct {
    CancellationStatus CancellationStatusEnum `json:"cancellationStatus"`
    QuantumTaskArn string `json:"quantumTaskArn"`
    
}

