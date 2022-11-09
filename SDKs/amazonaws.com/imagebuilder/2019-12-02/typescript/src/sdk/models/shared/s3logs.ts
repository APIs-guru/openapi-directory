import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Logs
/** 
 * Amazon S3 logging configuration.
**/
export class S3Logs extends SpeakeasyBase {
  @Metadata({ data: "json, name=s3BucketName" })
  s3BucketName?: string;

  @Metadata({ data: "json, name=s3KeyPrefix" })
  s3KeyPrefix?: string;
}
