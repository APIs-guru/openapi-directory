package shared



type UserDefinedFunctionInput struct {
    ClassName *string `json:"ClassName,omitempty"`
    FunctionName *string `json:"FunctionName,omitempty"`
    OwnerName *string `json:"OwnerName,omitempty"`
    OwnerType *PrincipalTypeEnum `json:"OwnerType,omitempty"`
    ResourceUris []ResourceURI `json:"ResourceUris,omitempty"`
    
}

