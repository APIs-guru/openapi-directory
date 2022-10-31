package shared

type SourceConnectorTypeEnum string

const (
	SourceConnectorTypeEnumSalesforce SourceConnectorTypeEnum = "Salesforce"
	SourceConnectorTypeEnumMarketo    SourceConnectorTypeEnum = "Marketo"
	SourceConnectorTypeEnumZendesk    SourceConnectorTypeEnum = "Zendesk"
	SourceConnectorTypeEnumServicenow SourceConnectorTypeEnum = "Servicenow"
	SourceConnectorTypeEnumS3         SourceConnectorTypeEnum = "S3"
)
