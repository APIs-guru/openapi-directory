import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Storage
/** 
 * Describes the storage parameters for Amazon S3 and Amazon S3 buckets for an instance store-backed AMI.
**/
export class S3Storage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccessKeyId?: string;

  @SpeakeasyMetadata()
  bucket?: string;

  @SpeakeasyMetadata()
  prefix?: string;

  @SpeakeasyMetadata()
  uploadPolicy?: string;

  @SpeakeasyMetadata()
  uploadPolicySignature?: string;
}
