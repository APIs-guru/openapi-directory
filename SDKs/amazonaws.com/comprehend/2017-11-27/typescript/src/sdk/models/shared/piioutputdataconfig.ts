import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PiiOutputDataConfig
/** 
 * Provides configuration parameters for the output of PII entity detection jobs.
**/
export class PiiOutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
