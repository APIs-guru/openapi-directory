import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Config
/** 
 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
**/
export class S3Config extends SpeakeasyBase {
  @Metadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn?: string;

  @Metadata({ data: "json, name=Path" })
  path: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
