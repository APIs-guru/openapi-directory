package shared

// CustomEmailLambdaVersionConfigType
// A custom email sender Lambda configuration type.
type CustomEmailLambdaVersionConfigType struct {
	LambdaArn     string                                 `json:"LambdaArn"`
	LambdaVersion CustomEmailSenderLambdaVersionTypeEnum `json:"LambdaVersion"`
}
