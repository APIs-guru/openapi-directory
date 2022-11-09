import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3OutputFormatConfig } from "./s3outputformatconfig";


// S3DestinationProperties
/** 
 *  The properties that are applied when Amazon S3 is used as a destination. 
**/
export class S3DestinationProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;

  @Metadata({ data: "json, name=s3OutputFormatConfig" })
  s3OutputFormatConfig?: S3OutputFormatConfig;
}
