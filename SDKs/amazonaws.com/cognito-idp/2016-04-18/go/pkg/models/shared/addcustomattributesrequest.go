package shared



type AddCustomAttributesRequest struct {
    CustomAttributes []SchemaAttributeType `json:"CustomAttributes"`
    UserPoolID string `json:"UserPoolId"`
    
}

