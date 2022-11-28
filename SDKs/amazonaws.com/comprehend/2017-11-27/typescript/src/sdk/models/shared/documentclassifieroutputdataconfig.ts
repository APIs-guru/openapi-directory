import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentClassifierOutputDataConfig
/** 
 * Provides output results configuration parameters for custom classifier jobs. 
**/
export class DocumentClassifierOutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri?: string;
}
