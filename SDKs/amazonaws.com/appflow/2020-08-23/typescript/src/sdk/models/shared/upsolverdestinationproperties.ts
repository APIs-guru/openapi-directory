import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UpsolverS3OutputFormatConfig } from "./upsolvers3outputformatconfig";


// UpsolverDestinationProperties
/** 
 *  The properties that are applied when Upsolver is used as a destination. 
**/
export class UpsolverDestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @Metadata({ data: "json, name=s3OutputFormatConfig" })
  s3OutputFormatConfig: UpsolverS3OutputFormatConfig;
}
