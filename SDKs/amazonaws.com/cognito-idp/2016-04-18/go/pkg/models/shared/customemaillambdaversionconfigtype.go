package shared

type CustomEmailLambdaVersionConfigType struct {
	LambdaArn     string                                 `json:"LambdaArn"`
	LambdaVersion CustomEmailSenderLambdaVersionTypeEnum `json:"LambdaVersion"`
}
