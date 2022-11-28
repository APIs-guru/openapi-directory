package shared

// CustomSmsLambdaVersionConfigType
// A custom SMS sender Lambda configuration type.
type CustomSmsLambdaVersionConfigType struct {
	LambdaArn     string                               `json:"LambdaArn"`
	LambdaVersion CustomSmsSenderLambdaVersionTypeEnum `json:"LambdaVersion"`
}
