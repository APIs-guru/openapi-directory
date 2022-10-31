package shared




type ResourceTypeEnum string

const (
    ResourceTypeEnumEc2Instance ResourceTypeEnum = "Ec2Instance"
ResourceTypeEnumAutoScalingGroup ResourceTypeEnum = "AutoScalingGroup"
ResourceTypeEnumEbsVolume ResourceTypeEnum = "EbsVolume"
ResourceTypeEnumLambdaFunction ResourceTypeEnum = "LambdaFunction"
)


