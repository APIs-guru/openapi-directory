import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AclGrantee } from "./aclgrantee";
import { AclPermissionEnum } from "./aclpermissionenum";


// S3BucketAclGrantConfiguration
/** 
 * A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.
**/
export class S3BucketAclGrantConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=grantee" })
  grantee: AclGrantee;

  @Metadata({ data: "json, name=permission" })
  permission: AclPermissionEnum;
}
