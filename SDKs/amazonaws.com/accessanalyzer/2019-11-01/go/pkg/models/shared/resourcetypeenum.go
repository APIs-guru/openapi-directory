package shared

type ResourceTypeEnum string

const (
	ResourceTypeEnumAwsS3Bucket             ResourceTypeEnum = "AWS::S3::Bucket"
	ResourceTypeEnumAwsIamRole              ResourceTypeEnum = "AWS::IAM::Role"
	ResourceTypeEnumAwsSqsQueue             ResourceTypeEnum = "AWS::SQS::Queue"
	ResourceTypeEnumAwsLambdaFunction       ResourceTypeEnum = "AWS::Lambda::Function"
	ResourceTypeEnumAwsLambdaLayerVersion   ResourceTypeEnum = "AWS::Lambda::LayerVersion"
	ResourceTypeEnumAwsKmsKey               ResourceTypeEnum = "AWS::KMS::Key"
	ResourceTypeEnumAwsSecretsManagerSecret ResourceTypeEnum = "AWS::SecretsManager::Secret"
)
