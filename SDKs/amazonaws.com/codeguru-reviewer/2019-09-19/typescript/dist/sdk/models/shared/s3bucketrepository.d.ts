import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3RepositoryDetails } from "./s3repositorydetails";
/**
 *  Information about an associated repository in an S3 bucket. The associated repository contains a source code .zip file and a build artifacts .zip file that contains .jar or .class files.
**/
export declare class S3BucketRepository extends SpeakeasyBase {
    details?: S3RepositoryDetails;
    name: string;
}
