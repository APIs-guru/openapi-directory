import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputDataConfig
/** 
 * The output properties for a detection job.
**/
export class OutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
