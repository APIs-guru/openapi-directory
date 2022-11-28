import { SpeakeasyBase } from "../../../internal/utils";
/**
 * You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.
**/
export declare class AclGrantee extends SpeakeasyBase {
    id?: string;
    uri?: string;
}
