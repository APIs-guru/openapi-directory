package shared

type UserDefinedFunctionInput struct {
	ClassName    *string            `json:"ClassName"`
	FunctionName *string            `json:"FunctionName"`
	OwnerName    *string            `json:"OwnerName"`
	OwnerType    *PrincipalTypeEnum `json:"OwnerType"`
	ResourceUris []ResourceURI      `json:"ResourceUris"`
}
