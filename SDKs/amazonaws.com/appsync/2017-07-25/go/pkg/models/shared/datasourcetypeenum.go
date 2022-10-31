package shared

type DataSourceTypeEnum string

const (
	DataSourceTypeEnumAwsLambda           DataSourceTypeEnum = "AWS_LAMBDA"
	DataSourceTypeEnumAmazonDynamodb      DataSourceTypeEnum = "AMAZON_DYNAMODB"
	DataSourceTypeEnumAmazonElasticsearch DataSourceTypeEnum = "AMAZON_ELASTICSEARCH"
	DataSourceTypeEnumNone                DataSourceTypeEnum = "NONE"
	DataSourceTypeEnumHTTP                DataSourceTypeEnum = "HTTP"
	DataSourceTypeEnumRelationalDatabase  DataSourceTypeEnum = "RELATIONAL_DATABASE"
)
