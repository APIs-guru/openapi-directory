


export enum ScalableDimensionEnum {
    AutoscalingAutoScalingGroupDesiredCapacity = "autoscaling:autoScalingGroup:DesiredCapacity",
    EcsServiceDesiredCount = "ecs:service:DesiredCount",
    Ec2SpotFleetRequestTargetCapacity = "ec2:spot-fleet-request:TargetCapacity",
    RdsClusterReadReplicaCount = "rds:cluster:ReadReplicaCount",
    DynamodbTableReadCapacityUnits = "dynamodb:table:ReadCapacityUnits",
    DynamodbTableWriteCapacityUnits = "dynamodb:table:WriteCapacityUnits",
    DynamodbIndexReadCapacityUnits = "dynamodb:index:ReadCapacityUnits",
    DynamodbIndexWriteCapacityUnits = "dynamodb:index:WriteCapacityUnits"
}
