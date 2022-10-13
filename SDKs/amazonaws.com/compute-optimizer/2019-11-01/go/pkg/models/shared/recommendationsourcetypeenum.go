package shared

type RecommendationSourceTypeEnum string

const (
	RecommendationSourceTypeEnumEc2Instance      RecommendationSourceTypeEnum = "Ec2Instance"
	RecommendationSourceTypeEnumAutoScalingGroup RecommendationSourceTypeEnum = "AutoScalingGroup"
	RecommendationSourceTypeEnumEbsVolume        RecommendationSourceTypeEnum = "EbsVolume"
	RecommendationSourceTypeEnumLambdaFunction   RecommendationSourceTypeEnum = "LambdaFunction"
)
