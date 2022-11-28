import { SpeakeasyBase } from "../../../internal/utils";
import { AclGrantee } from "./aclgrantee";
import { AclPermissionEnum } from "./aclpermissionenum";
/**
 * A proposed access control list grant configuration for an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#setting-acls">How to Specify an ACL</a>.
**/
export declare class S3BucketAclGrantConfiguration extends SpeakeasyBase {
    grantee: AclGrantee;
    permission: AclPermissionEnum;
}
