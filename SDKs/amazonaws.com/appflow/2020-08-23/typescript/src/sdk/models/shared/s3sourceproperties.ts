import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3SourceProperties
/** 
 *  The properties that are applied when Amazon S3 is being used as the flow source. 
**/
export class S3SourceProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=bucketPrefix" })
  bucketPrefix?: string;
}
