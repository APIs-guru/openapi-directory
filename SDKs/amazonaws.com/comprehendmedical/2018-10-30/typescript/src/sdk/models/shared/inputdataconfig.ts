import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputDataConfig
/** 
 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. 
**/
export class InputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @Metadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
