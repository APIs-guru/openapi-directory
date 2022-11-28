import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3RepositoryDetails } from "./s3repositorydetails";



// S3BucketRepository
/** 
 *  Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files. 
**/
export class S3BucketRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Details" })
  details?: S3RepositoryDetails;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
