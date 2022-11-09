import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputDataConfig
/** 
 * The output properties for a detection job.
**/
export class OutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
