import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NeptuneSettings
/** 
 * Provides information that defines an Amazon Neptune endpoint.
**/
export class NeptuneSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ErrorRetryDuration" })
  errorRetryDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=IamAuthEnabled" })
  iamAuthEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxRetryCount" })
  maxRetryCount?: number;

  @SpeakeasyMetadata({ data: "json, name=S3BucketFolder" })
  s3BucketFolder: string;

  @SpeakeasyMetadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;
}
