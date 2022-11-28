import { SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
/**
 * DescribeLocationS3Response
**/
export declare class DescribeLocationS3Response extends SpeakeasyBase {
    agentArns?: string[];
    creationTime?: Date;
    locationArn?: string;
    locationUri?: string;
    s3Config?: S3Config;
    s3StorageClass?: S3StorageClassEnum;
}
