package shared




type ServiceNamespaceEnum string

const (
    ServiceNamespaceEnumEcs ServiceNamespaceEnum = "ecs"
ServiceNamespaceEnumElasticmapreduce ServiceNamespaceEnum = "elasticmapreduce"
ServiceNamespaceEnumEc2 ServiceNamespaceEnum = "ec2"
ServiceNamespaceEnumAppstream ServiceNamespaceEnum = "appstream"
ServiceNamespaceEnumDynamodb ServiceNamespaceEnum = "dynamodb"
ServiceNamespaceEnumRds ServiceNamespaceEnum = "rds"
ServiceNamespaceEnumSagemaker ServiceNamespaceEnum = "sagemaker"
ServiceNamespaceEnumCustomResource ServiceNamespaceEnum = "custom-resource"
ServiceNamespaceEnumComprehend ServiceNamespaceEnum = "comprehend"
ServiceNamespaceEnumLambda ServiceNamespaceEnum = "lambda"
ServiceNamespaceEnumCassandra ServiceNamespaceEnum = "cassandra"
ServiceNamespaceEnumKafka ServiceNamespaceEnum = "kafka"
ServiceNamespaceEnumElasticache ServiceNamespaceEnum = "elasticache"
)


