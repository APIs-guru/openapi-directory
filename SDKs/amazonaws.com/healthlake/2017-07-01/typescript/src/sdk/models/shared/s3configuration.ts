import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Configuration
/** 
 *  The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access. 
**/
export class S3Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
