import { SpeakeasyBase } from "../../../internal/utils/utils";
import { S3Config } from "./s3config";
/**
 * The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
**/
export declare class DataSource extends SpeakeasyBase {
    s3Config: S3Config;
}
