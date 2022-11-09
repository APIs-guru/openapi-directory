import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OutputDataConfig
/** 
 * <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
**/
export class OutputDataConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
