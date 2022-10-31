package shared



type CustomSmsLambdaVersionConfigType struct {
    LambdaArn string `json:"LambdaArn"`
    LambdaVersion CustomSmsSenderLambdaVersionTypeEnum `json:"LambdaVersion"`
    
}

