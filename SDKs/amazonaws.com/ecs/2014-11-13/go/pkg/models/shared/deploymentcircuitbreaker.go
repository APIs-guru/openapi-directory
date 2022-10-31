package shared



type DeploymentCircuitBreaker struct {
    Enable bool `json:"enable"`
    Rollback bool `json:"rollback"`
    
}

