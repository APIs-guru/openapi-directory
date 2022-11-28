import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpsolverS3OutputFormatConfig } from "./upsolvers3outputformatconfig";



// UpsolverDestinationProperties
/** 
 *  The properties that are applied when Upsolver is used as a destination. 
**/
export class UpsolverDestinationProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=s3OutputFormatConfig" })
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
