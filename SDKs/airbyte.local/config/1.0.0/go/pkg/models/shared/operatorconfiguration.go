package shared

type OperatorConfiguration struct {
	Dbt           *OperatorDbt           `json:"dbt"`
	Normalization *OperatorNormalization `json:"normalization"`
	OperatorType  OperatorTypeEnum       `json:"operatorType"`
}
