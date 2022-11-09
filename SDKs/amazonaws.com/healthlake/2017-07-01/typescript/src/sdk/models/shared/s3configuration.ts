import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Configuration
/** 
 *  The configuration of the S3 bucket for either an import or export job. This includes assigning permissions for access. 
**/
export class S3Configuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId: string;

  @Metadata({ data: "json, name=S3Uri" })
  s3Uri: string;
}
