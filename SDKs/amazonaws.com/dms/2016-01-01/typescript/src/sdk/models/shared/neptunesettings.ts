import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NeptuneSettings
/** 
 * Provides information that defines an Amazon Neptune endpoint.
**/
export class NeptuneSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=ErrorRetryDuration" })
  errorRetryDuration?: number;

  @Metadata({ data: "json, name=IamAuthEnabled" })
  iamAuthEnabled?: boolean;

  @Metadata({ data: "json, name=MaxFileSize" })
  maxFileSize?: number;

  @Metadata({ data: "json, name=MaxRetryCount" })
  maxRetryCount?: number;

  @Metadata({ data: "json, name=S3BucketFolder" })
  s3BucketFolder: string;

  @Metadata({ data: "json, name=S3BucketName" })
  s3BucketName: string;

  @Metadata({ data: "json, name=ServiceAccessRoleArn" })
  serviceAccessRoleArn?: string;
}
