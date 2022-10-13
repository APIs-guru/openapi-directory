package shared

type LoginAuthConfigReqObj struct {
	AwsCognitoIdentityPoolID *string `json:"AwsCognitoIdentityPoolId"`
	AwsCognitoRegion         *string `json:"AwsCognitoRegion"`
	AwsUserPoolsID           *string `json:"AwsUserPoolsId"`
	AwsUserPoolsWebClientID  *string `json:"AwsUserPoolsWebClientId"`
}
