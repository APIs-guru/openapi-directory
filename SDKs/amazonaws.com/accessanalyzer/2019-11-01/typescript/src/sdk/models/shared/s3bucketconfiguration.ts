import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3AccessPointConfiguration } from "./s3accesspointconfiguration";
import { S3BucketAclGrantConfiguration } from "./s3bucketaclgrantconfiguration";
import { S3PublicAccessBlockConfiguration } from "./s3publicaccessblockconfiguration";


// S3BucketConfiguration
/** 
 * Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.
**/
export class S3BucketConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessPoints", elemType: shared.S3AccessPointConfiguration })
  accessPoints?: Map<string, S3AccessPointConfiguration>;

  @Metadata({ data: "json, name=bucketAclGrants", elemType: shared.S3BucketAclGrantConfiguration })
  bucketAclGrants?: S3BucketAclGrantConfiguration[];

  @Metadata({ data: "json, name=bucketPolicy" })
  bucketPolicy?: string;

  @Metadata({ data: "json, name=bucketPublicAccessBlock" })
  bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;
}
