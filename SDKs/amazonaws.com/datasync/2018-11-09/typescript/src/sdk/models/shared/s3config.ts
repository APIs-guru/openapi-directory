import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Config
/** 
 * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that is used to access an Amazon S3 bucket.</p> <p>For detailed information about using such a role, see Creating a Location for Amazon S3 in the <i>DataSync User Guide</i>.</p>
**/
export class S3Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=BucketAccessRoleArn" })
  bucketAccessRoleArn: string;
}
