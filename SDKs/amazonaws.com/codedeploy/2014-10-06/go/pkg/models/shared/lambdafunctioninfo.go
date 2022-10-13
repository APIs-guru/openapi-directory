package shared

type LambdaFunctionInfo struct {
	CurrentVersion      *string  `json:"currentVersion"`
	FunctionAlias       *string  `json:"functionAlias"`
	FunctionName        *string  `json:"functionName"`
	TargetVersion       *string  `json:"targetVersion"`
	TargetVersionWeight *float64 `json:"targetVersionWeight"`
}
