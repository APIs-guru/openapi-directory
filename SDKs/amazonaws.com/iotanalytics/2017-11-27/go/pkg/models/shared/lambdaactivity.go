package shared

type LambdaActivity struct {
	BatchSize  int64   `json:"batchSize"`
	LambdaName string  `json:"lambdaName"`
	Name       string  `json:"name"`
	Next       *string `json:"next"`
}
