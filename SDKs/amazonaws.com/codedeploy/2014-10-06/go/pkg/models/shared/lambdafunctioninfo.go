package shared

// LambdaFunctionInfo
//
//	Information about a Lambda function specified in a deployment.
type LambdaFunctionInfo struct {
	CurrentVersion      *string  `json:"currentVersion,omitempty"`
	FunctionAlias       *string  `json:"functionAlias,omitempty"`
	FunctionName        *string  `json:"functionName,omitempty"`
	TargetVersion       *string  `json:"targetVersion,omitempty"`
	TargetVersionWeight *float64 `json:"targetVersionWeight,omitempty"`
}
