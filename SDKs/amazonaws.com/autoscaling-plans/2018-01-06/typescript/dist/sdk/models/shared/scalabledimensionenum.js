export var ScalableDimensionEnum;
(function (ScalableDimensionEnum) {
    ScalableDimensionEnum["AutoscalingAutoScalingGroupDesiredCapacity"] = "autoscaling:autoScalingGroup:DesiredCapacity";
    ScalableDimensionEnum["EcsServiceDesiredCount"] = "ecs:service:DesiredCount";
    ScalableDimensionEnum["Ec2SpotFleetRequestTargetCapacity"] = "ec2:spot-fleet-request:TargetCapacity";
    ScalableDimensionEnum["RdsClusterReadReplicaCount"] = "rds:cluster:ReadReplicaCount";
    ScalableDimensionEnum["DynamodbTableReadCapacityUnits"] = "dynamodb:table:ReadCapacityUnits";
    ScalableDimensionEnum["DynamodbTableWriteCapacityUnits"] = "dynamodb:table:WriteCapacityUnits";
    ScalableDimensionEnum["DynamodbIndexReadCapacityUnits"] = "dynamodb:index:ReadCapacityUnits";
    ScalableDimensionEnum["DynamodbIndexWriteCapacityUnits"] = "dynamodb:index:WriteCapacityUnits";
})(ScalableDimensionEnum || (ScalableDimensionEnum = {}));
