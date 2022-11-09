import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Repository
/** 
 *  Information about a repository in an S3 bucket. 
**/
export class S3Repository extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
