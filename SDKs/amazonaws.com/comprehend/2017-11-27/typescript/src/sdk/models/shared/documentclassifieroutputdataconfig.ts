import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentClassifierOutputDataConfig
/** 
 * Provides output results configuration parameters for custom classifier jobs. 
**/
export class DocumentClassifierOutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
