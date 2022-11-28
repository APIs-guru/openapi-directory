import { SpeakeasyBase } from "../../../internal/utils";
import { IamRoleConfiguration } from "./iamroleconfiguration";
import { KmsKeyConfiguration } from "./kmskeyconfiguration";
import { S3BucketConfiguration } from "./s3bucketconfiguration";
import { SecretsManagerSecretConfiguration } from "./secretsmanagersecretconfiguration";
import { SqsQueueConfiguration } from "./sqsqueueconfiguration";
/**
 * Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
**/
export declare class Configuration extends SpeakeasyBase {
    iamRole?: IamRoleConfiguration;
    kmsKey?: KmsKeyConfiguration;
    s3Bucket?: S3BucketConfiguration;
    secretsManagerSecret?: SecretsManagerSecretConfiguration;
    sqsQueue?: SqsQueueConfiguration;
}
