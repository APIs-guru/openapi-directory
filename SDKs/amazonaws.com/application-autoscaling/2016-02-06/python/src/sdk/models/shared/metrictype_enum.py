from dataclasses import dataclass, field
from enum import Enum

class MetricTypeEnum(str, Enum):
    DYNAMO_DB_READ_CAPACITY_UTILIZATION = "DynamoDBReadCapacityUtilization"
    DYNAMO_DB_WRITE_CAPACITY_UTILIZATION = "DynamoDBWriteCapacityUtilization"
    ALB_REQUEST_COUNT_PER_TARGET = "ALBRequestCountPerTarget"
    RDS_READER_AVERAGE_CPU_UTILIZATION = "RDSReaderAverageCPUUtilization"
    RDS_READER_AVERAGE_DATABASE_CONNECTIONS = "RDSReaderAverageDatabaseConnections"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_CPU_UTILIZATION = "EC2SpotFleetRequestAverageCPUUtilization"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_IN = "EC2SpotFleetRequestAverageNetworkIn"
    EC2_SPOT_FLEET_REQUEST_AVERAGE_NETWORK_OUT = "EC2SpotFleetRequestAverageNetworkOut"
    SAGE_MAKER_VARIANT_INVOCATIONS_PER_INSTANCE = "SageMakerVariantInvocationsPerInstance"
    ECS_SERVICE_AVERAGE_CPU_UTILIZATION = "ECSServiceAverageCPUUtilization"
    ECS_SERVICE_AVERAGE_MEMORY_UTILIZATION = "ECSServiceAverageMemoryUtilization"
    APP_STREAM_AVERAGE_CAPACITY_UTILIZATION = "AppStreamAverageCapacityUtilization"
    COMPREHEND_INFERENCE_UTILIZATION = "ComprehendInferenceUtilization"
    LAMBDA_PROVISIONED_CONCURRENCY_UTILIZATION = "LambdaProvisionedConcurrencyUtilization"
    CASSANDRA_READ_CAPACITY_UTILIZATION = "CassandraReadCapacityUtilization"
    CASSANDRA_WRITE_CAPACITY_UTILIZATION = "CassandraWriteCapacityUtilization"
    KAFKA_BROKER_STORAGE_UTILIZATION = "KafkaBrokerStorageUtilization"
    ELASTI_CACHE_PRIMARY_ENGINE_CPU_UTILIZATION = "ElastiCachePrimaryEngineCPUUtilization"
    ELASTI_CACHE_REPLICA_ENGINE_CPU_UTILIZATION = "ElastiCacheReplicaEngineCPUUtilization"
    ELASTI_CACHE_DATABASE_MEMORY_USAGE_COUNTED_FOR_EVICT_PERCENTAGE = "ElastiCacheDatabaseMemoryUsageCountedForEvictPercentage"

