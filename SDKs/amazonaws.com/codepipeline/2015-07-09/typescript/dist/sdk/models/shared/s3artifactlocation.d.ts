import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location of the S3 bucket that contains a revision.
**/
export declare class S3ArtifactLocation extends SpeakeasyBase {
    bucketName: string;
    objectKey: string;
}
