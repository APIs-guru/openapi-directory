from dataclasses import dataclass, field
from enum import Enum

class ScalableDimensionEnum(str, Enum):
    ECS_SERVICE_DESIRED_COUNT = "ecs:service:DesiredCount"
    EC2_SPOT_FLEET_REQUEST_TARGET_CAPACITY = "ec2:spot-fleet-request:TargetCapacity"
    ELASTICMAPREDUCE_INSTANCEGROUP_INSTANCE_COUNT = "elasticmapreduce:instancegroup:InstanceCount"
    APPSTREAM_FLEET_DESIRED_CAPACITY = "appstream:fleet:DesiredCapacity"
    DYNAMODB_TABLE_READ_CAPACITY_UNITS = "dynamodb:table:ReadCapacityUnits"
    DYNAMODB_TABLE_WRITE_CAPACITY_UNITS = "dynamodb:table:WriteCapacityUnits"
    DYNAMODB_INDEX_READ_CAPACITY_UNITS = "dynamodb:index:ReadCapacityUnits"
    DYNAMODB_INDEX_WRITE_CAPACITY_UNITS = "dynamodb:index:WriteCapacityUnits"
    RDS_CLUSTER_READ_REPLICA_COUNT = "rds:cluster:ReadReplicaCount"
    SAGEMAKER_VARIANT_DESIRED_INSTANCE_COUNT = "sagemaker:variant:DesiredInstanceCount"
    CUSTOM_RESOURCE_RESOURCE_TYPE_PROPERTY = "custom-resource:ResourceType:Property"
    COMPREHEND_DOCUMENT_CLASSIFIER_ENDPOINT_DESIRED_INFERENCE_UNITS = "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
    COMPREHEND_ENTITY_RECOGNIZER_ENDPOINT_DESIRED_INFERENCE_UNITS = "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
    LAMBDA_FUNCTION_PROVISIONED_CONCURRENCY = "lambda:function:ProvisionedConcurrency"
    CASSANDRA_TABLE_READ_CAPACITY_UNITS = "cassandra:table:ReadCapacityUnits"
    CASSANDRA_TABLE_WRITE_CAPACITY_UNITS = "cassandra:table:WriteCapacityUnits"
    KAFKA_BROKER_STORAGE_VOLUME_SIZE = "kafka:broker-storage:VolumeSize"
    ELASTICACHE_REPLICATION_GROUP_NODE_GROUPS = "elasticache:replication-group:NodeGroups"
    ELASTICACHE_REPLICATION_GROUP_REPLICAS = "elasticache:replication-group:Replicas"

