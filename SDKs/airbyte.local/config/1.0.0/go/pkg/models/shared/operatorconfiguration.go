package shared



type OperatorConfiguration struct {
    Dbt *OperatorDbt `json:"dbt,omitempty"`
    Normalization *OperatorNormalization `json:"normalization,omitempty"`
    OperatorType OperatorTypeEnum `json:"operatorType"`
    
}

