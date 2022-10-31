package shared



type LoginAuthConfigReqObj struct {
    AwsCognitoIdentityPoolID *string `json:"AwsCognitoIdentityPoolId,omitempty"`
    AwsCognitoRegion *string `json:"AwsCognitoRegion,omitempty"`
    AwsUserPoolsID *string `json:"AwsUserPoolsId,omitempty"`
    AwsUserPoolsWebClientID *string `json:"AwsUserPoolsWebClientId,omitempty"`
    
}

