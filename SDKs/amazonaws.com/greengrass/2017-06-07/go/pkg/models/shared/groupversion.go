package shared



type GroupVersion struct {
    ConnectorDefinitionVersionArn *string `json:"ConnectorDefinitionVersionArn,omitempty"`
    CoreDefinitionVersionArn *string `json:"CoreDefinitionVersionArn,omitempty"`
    DeviceDefinitionVersionArn *string `json:"DeviceDefinitionVersionArn,omitempty"`
    FunctionDefinitionVersionArn *string `json:"FunctionDefinitionVersionArn,omitempty"`
    LoggerDefinitionVersionArn *string `json:"LoggerDefinitionVersionArn,omitempty"`
    ResourceDefinitionVersionArn *string `json:"ResourceDefinitionVersionArn,omitempty"`
    SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn,omitempty"`
    
}

