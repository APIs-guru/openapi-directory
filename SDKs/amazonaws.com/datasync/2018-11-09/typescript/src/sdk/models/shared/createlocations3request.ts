import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
import { TagListEntry } from "./taglistentry";



// CreateLocationS3Request
/** 
 * CreateLocationS3Request
**/
export class CreateLocationS3Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=S3BucketArn" })
  s3BucketArn: string;

  @SpeakeasyMetadata({ data: "json, name=S3Config" })
  s3Config: S3Config;

  @SpeakeasyMetadata({ data: "json, name=S3StorageClass" })
  s3StorageClass?: S3StorageClassEnum;

  @SpeakeasyMetadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: TagListEntry })
  tags?: TagListEntry[];
}
