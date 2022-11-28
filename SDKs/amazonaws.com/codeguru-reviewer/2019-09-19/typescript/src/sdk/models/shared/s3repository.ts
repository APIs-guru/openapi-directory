import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Repository
/** 
 *  Information about a repository in an S3 bucket. 
**/
export class S3Repository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
