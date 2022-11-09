import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Location
/** 
 * The Amazon S3 location where the source code files provided with the project request are stored.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketKey" })
  bucketKey?: string;

  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;
}
