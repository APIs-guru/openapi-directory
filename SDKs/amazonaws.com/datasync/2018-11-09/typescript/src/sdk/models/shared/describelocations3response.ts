import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";


// DescribeLocationS3Response
/** 
 * DescribeLocationS3Response
**/
export class DescribeLocationS3Response extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=S3Config" })
  s3Config?: S3Config;

  @Metadata({ data: "json, name=S3StorageClass" })
  s3StorageClass?: S3StorageClassEnum;
}
