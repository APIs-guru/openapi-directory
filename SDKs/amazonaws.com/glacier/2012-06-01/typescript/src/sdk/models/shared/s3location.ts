import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Grant } from "./grant";
import { CannedAclEnum } from "./cannedaclenum";
import { Encryption } from "./encryption";
import { StorageClassEnum } from "./storageclassenum";


// S3Location
/** 
 * Contains information about the location in Amazon S3 where the select job results are stored.
**/
export class S3Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessControlList", elemType: shared.Grant })
  accessControlList?: Grant[];

  @Metadata({ data: "json, name=BucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=CannedACL" })
  cannedAcl?: CannedAclEnum;

  @Metadata({ data: "json, name=Encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=Prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=StorageClass" })
  storageClass?: StorageClassEnum;

  @Metadata({ data: "json, name=Tagging" })
  tagging?: Map<string, string>;

  @Metadata({ data: "json, name=UserMetadata" })
  userMetadata?: Map<string, string>;
}
