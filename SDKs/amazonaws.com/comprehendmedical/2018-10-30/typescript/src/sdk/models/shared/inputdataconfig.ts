import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputDataConfig
/** 
 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. 
**/
export class InputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Bucket" })
  s3Bucket: string;

  @SpeakeasyMetadata({ data: "json, name=S3Key" })
  s3Key?: string;
}
