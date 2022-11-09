import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CannedAccessControlListEnum } from "./cannedaccesscontrollistenum";


// S3Action
/** 
 * Describes an action to write data to an Amazon S3 bucket.
**/
export class S3Action extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=cannedAcl" })
  cannedAcl?: CannedAccessControlListEnum;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
