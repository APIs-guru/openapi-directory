import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CannedAccessControlListEnum } from "./cannedaccesscontrollistenum";



// S3Action
/** 
 * Describes an action to write data to an Amazon S3 bucket.
**/
export class S3Action extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucketName" })
  bucketName: string;

  @SpeakeasyMetadata({ data: "json, name=cannedAcl" })
  cannedAcl?: CannedAccessControlListEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
