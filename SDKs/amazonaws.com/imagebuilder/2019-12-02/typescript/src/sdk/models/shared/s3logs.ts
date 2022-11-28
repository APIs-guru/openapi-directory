import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Logs
/** 
 * Amazon S3 logging configuration.
**/
export class S3Logs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @SpeakeasyMetadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;
}
