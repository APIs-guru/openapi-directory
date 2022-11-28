import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OutputDataConfig
/** 
 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
**/
export class OutputDataConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
