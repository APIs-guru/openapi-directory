import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AclGrantee } from "./aclgrantee";
import { AclPermissionEnum } from "./aclpermissionenum";



// S3BucketAclGrantConfiguration
/** 
 * A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.
**/
export class S3BucketAclGrantConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=grantee" })
  grantee: AclGrantee;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission: AclPermissionEnum;
}
