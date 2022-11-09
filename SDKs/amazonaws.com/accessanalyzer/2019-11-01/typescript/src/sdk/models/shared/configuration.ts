import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamRoleConfiguration } from "./iamroleconfiguration";
import { KmsKeyConfiguration } from "./kmskeyconfiguration";
import { S3BucketConfiguration } from "./s3bucketconfiguration";
import { SecretsManagerSecretConfiguration } from "./secretsmanagersecretconfiguration";
import { SqsQueueConfiguration } from "./sqsqueueconfiguration";


// Configuration
/** 
 * Access control configuration structures for your resource. You specify the configuration as a type-value pair. You can specify only one type of access control configuration.
**/
export class Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=iamRole" })
  iamRole?: IamRoleConfiguration;

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: KmsKeyConfiguration;

  @Metadata({ data: "json, name=s3Bucket" })
  s3Bucket?: S3BucketConfiguration;

  @Metadata({ data: "json, name=secretsManagerSecret" })
  secretsManagerSecret?: SecretsManagerSecretConfiguration;

  @Metadata({ data: "json, name=sqsQueue" })
  sqsQueue?: SqsQueueConfiguration;
}
