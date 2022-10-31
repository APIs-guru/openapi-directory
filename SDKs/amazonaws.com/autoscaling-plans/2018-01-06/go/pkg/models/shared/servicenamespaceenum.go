package shared




type ServiceNamespaceEnum string

const (
    ServiceNamespaceEnumAutoscaling ServiceNamespaceEnum = "autoscaling"
ServiceNamespaceEnumEcs ServiceNamespaceEnum = "ecs"
ServiceNamespaceEnumEc2 ServiceNamespaceEnum = "ec2"
ServiceNamespaceEnumRds ServiceNamespaceEnum = "rds"
ServiceNamespaceEnumDynamodb ServiceNamespaceEnum = "dynamodb"
)


