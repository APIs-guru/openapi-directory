import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PiiOutputDataConfig
/** 
 * Provides configuration parameters for the output of PII entity detection jobs.
**/
export class PiiOutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
