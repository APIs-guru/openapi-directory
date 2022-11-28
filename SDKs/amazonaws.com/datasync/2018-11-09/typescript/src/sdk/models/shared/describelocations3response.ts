import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";



// DescribeLocationS3Response
/** 
 * DescribeLocationS3Response
**/
export class DescribeLocationS3Response extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=S3Config" })
  s3Config?: S3Config;

  @SpeakeasyMetadata({ data: "json, name=S3StorageClass" })
  s3StorageClass?: S3StorageClassEnum;
}
