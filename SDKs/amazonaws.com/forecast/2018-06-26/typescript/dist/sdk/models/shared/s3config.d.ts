import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.
**/
export declare class S3Config extends SpeakeasyBase {
    kmsKeyArn?: string;
    path: string;
    roleArn: string;
}
