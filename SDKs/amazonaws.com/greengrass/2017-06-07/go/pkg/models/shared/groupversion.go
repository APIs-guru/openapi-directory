package shared

type GroupVersion struct {
	ConnectorDefinitionVersionArn    *string `json:"ConnectorDefinitionVersionArn"`
	CoreDefinitionVersionArn         *string `json:"CoreDefinitionVersionArn"`
	DeviceDefinitionVersionArn       *string `json:"DeviceDefinitionVersionArn"`
	FunctionDefinitionVersionArn     *string `json:"FunctionDefinitionVersionArn"`
	LoggerDefinitionVersionArn       *string `json:"LoggerDefinitionVersionArn"`
	ResourceDefinitionVersionArn     *string `json:"ResourceDefinitionVersionArn"`
	SubscriptionDefinitionVersionArn *string `json:"SubscriptionDefinitionVersionArn"`
}
