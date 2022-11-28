import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3Config } from "./s3config";



// DataSource
/** 
 * The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=S3Config" })
  s3Config: S3Config;
}
