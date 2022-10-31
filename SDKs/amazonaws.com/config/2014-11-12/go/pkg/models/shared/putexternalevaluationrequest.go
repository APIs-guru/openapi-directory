package shared



type PutExternalEvaluationRequest struct {
    ConfigRuleName string `json:"ConfigRuleName"`
    ExternalEvaluation ExternalEvaluation `json:"ExternalEvaluation"`
    
}

