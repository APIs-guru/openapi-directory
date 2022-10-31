package shared

type ScalableDimensionEnum string

const (
	ScalableDimensionEnumEcsServiceDesiredCount                                    ScalableDimensionEnum = "ecs:service:DesiredCount"
	ScalableDimensionEnumEc2SpotFleetRequestTargetCapacity                         ScalableDimensionEnum = "ec2:spot-fleet-request:TargetCapacity"
	ScalableDimensionEnumElasticmapreduceInstancegroupInstanceCount                ScalableDimensionEnum = "elasticmapreduce:instancegroup:InstanceCount"
	ScalableDimensionEnumAppstreamFleetDesiredCapacity                             ScalableDimensionEnum = "appstream:fleet:DesiredCapacity"
	ScalableDimensionEnumDynamodbTableReadCapacityUnits                            ScalableDimensionEnum = "dynamodb:table:ReadCapacityUnits"
	ScalableDimensionEnumDynamodbTableWriteCapacityUnits                           ScalableDimensionEnum = "dynamodb:table:WriteCapacityUnits"
	ScalableDimensionEnumDynamodbIndexReadCapacityUnits                            ScalableDimensionEnum = "dynamodb:index:ReadCapacityUnits"
	ScalableDimensionEnumDynamodbIndexWriteCapacityUnits                           ScalableDimensionEnum = "dynamodb:index:WriteCapacityUnits"
	ScalableDimensionEnumRdsClusterReadReplicaCount                                ScalableDimensionEnum = "rds:cluster:ReadReplicaCount"
	ScalableDimensionEnumSagemakerVariantDesiredInstanceCount                      ScalableDimensionEnum = "sagemaker:variant:DesiredInstanceCount"
	ScalableDimensionEnumCustomResourceResourceTypeProperty                        ScalableDimensionEnum = "custom-resource:ResourceType:Property"
	ScalableDimensionEnumComprehendDocumentClassifierEndpointDesiredInferenceUnits ScalableDimensionEnum = "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
	ScalableDimensionEnumComprehendEntityRecognizerEndpointDesiredInferenceUnits   ScalableDimensionEnum = "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
	ScalableDimensionEnumLambdaFunctionProvisionedConcurrency                      ScalableDimensionEnum = "lambda:function:ProvisionedConcurrency"
	ScalableDimensionEnumCassandraTableReadCapacityUnits                           ScalableDimensionEnum = "cassandra:table:ReadCapacityUnits"
	ScalableDimensionEnumCassandraTableWriteCapacityUnits                          ScalableDimensionEnum = "cassandra:table:WriteCapacityUnits"
	ScalableDimensionEnumKafkaBrokerStorageVolumeSize                              ScalableDimensionEnum = "kafka:broker-storage:VolumeSize"
	ScalableDimensionEnumElasticacheReplicationGroupNodeGroups                     ScalableDimensionEnum = "elasticache:replication-group:NodeGroups"
	ScalableDimensionEnumElasticacheReplicationGroupReplicas                       ScalableDimensionEnum = "elasticache:replication-group:Replicas"
)
