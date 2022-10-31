package shared




type ServiceNameEnum string

const (
    ServiceNameEnumAPIGateway ServiceNameEnum = "API_GATEWAY"
ServiceNameEnumApplicationElb ServiceNameEnum = "APPLICATION_ELB"
ServiceNameEnumAutoScalingGroup ServiceNameEnum = "AUTO_SCALING_GROUP"
ServiceNameEnumCloudFront ServiceNameEnum = "CLOUD_FRONT"
ServiceNameEnumDynamoDb ServiceNameEnum = "DYNAMO_DB"
ServiceNameEnumEc2 ServiceNameEnum = "EC2"
ServiceNameEnumEcs ServiceNameEnum = "ECS"
ServiceNameEnumEks ServiceNameEnum = "EKS"
ServiceNameEnumElasticBeanstalk ServiceNameEnum = "ELASTIC_BEANSTALK"
ServiceNameEnumElastiCache ServiceNameEnum = "ELASTI_CACHE"
ServiceNameEnumElb ServiceNameEnum = "ELB"
ServiceNameEnumEs ServiceNameEnum = "ES"
ServiceNameEnumKinesis ServiceNameEnum = "KINESIS"
ServiceNameEnumLambda ServiceNameEnum = "LAMBDA"
ServiceNameEnumNatGateway ServiceNameEnum = "NAT_GATEWAY"
ServiceNameEnumNetworkElb ServiceNameEnum = "NETWORK_ELB"
ServiceNameEnumRds ServiceNameEnum = "RDS"
ServiceNameEnumRedshift ServiceNameEnum = "REDSHIFT"
ServiceNameEnumRoute53 ServiceNameEnum = "ROUTE_53"
ServiceNameEnumS3 ServiceNameEnum = "S3"
ServiceNameEnumSageMaker ServiceNameEnum = "SAGE_MAKER"
ServiceNameEnumSns ServiceNameEnum = "SNS"
ServiceNameEnumSqs ServiceNameEnum = "SQS"
ServiceNameEnumStepFunctions ServiceNameEnum = "STEP_FUNCTIONS"
ServiceNameEnumSwf ServiceNameEnum = "SWF"
)


