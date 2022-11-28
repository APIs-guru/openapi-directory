export var ResourceTypeEnum;
(function (ResourceTypeEnum) {
    ResourceTypeEnum["AwsS3Bucket"] = "AWS::S3::Bucket";
    ResourceTypeEnum["AwsIamRole"] = "AWS::IAM::Role";
    ResourceTypeEnum["AwsSqsQueue"] = "AWS::SQS::Queue";
    ResourceTypeEnum["AwsLambdaFunction"] = "AWS::Lambda::Function";
    ResourceTypeEnum["AwsLambdaLayerVersion"] = "AWS::Lambda::LayerVersion";
    ResourceTypeEnum["AwsKmsKey"] = "AWS::KMS::Key";
    ResourceTypeEnum["AwsSecretsManagerSecret"] = "AWS::SecretsManager::Secret";
})(ResourceTypeEnum || (ResourceTypeEnum = {}));
