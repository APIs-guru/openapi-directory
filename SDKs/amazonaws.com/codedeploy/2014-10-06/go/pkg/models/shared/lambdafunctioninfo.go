package shared



type LambdaFunctionInfo struct {
    CurrentVersion *string `json:"currentVersion,omitempty"`
    FunctionAlias *string `json:"functionAlias,omitempty"`
    FunctionName *string `json:"functionName,omitempty"`
    TargetVersion *string `json:"targetVersion,omitempty"`
    TargetVersionWeight *float64 `json:"targetVersionWeight,omitempty"`
    
}

