import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AclGrantee
/** 
 * You specify each grantee as a type-value pair using one of these types. You can specify only one type of grantee. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketAcl.html">PutBucketAcl</a>.
**/
export class AclGrantee extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
