import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { S3Config } from "./s3config";
import { S3StorageClassEnum } from "./s3storageclassenum";
import { TagListEntry } from "./taglistentry";


// CreateLocationS3Request
/** 
 * CreateLocationS3Request
**/
export class CreateLocationS3Request extends SpeakeasyBase {
  @Metadata({ data: "json, name=AgentArns" })
  agentArns?: string[];

  @Metadata({ data: "json, name=S3BucketArn" })
  s3BucketArn: string;

  @Metadata({ data: "json, name=S3Config" })
  s3Config: S3Config;

  @Metadata({ data: "json, name=S3StorageClass" })
  s3StorageClass?: S3StorageClassEnum;

  @Metadata({ data: "json, name=Subdirectory" })
  subdirectory?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.TagListEntry })
  tags?: TagListEntry[];
}
