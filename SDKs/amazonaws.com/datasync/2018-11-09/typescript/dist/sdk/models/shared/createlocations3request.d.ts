import { SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
import { TagListEntry } from "./taglistentry";
/**
 * CreateLocationS3Request
**/
export declare class CreateLocationS3Request extends SpeakeasyBase {
    agentArns?: string[];
    s3BucketArn: string;
    s3Config: S3Config;
    s3StorageClass?: S3StorageClassEnum;
    subdirectory?: string;
    tags?: TagListEntry[];
}
