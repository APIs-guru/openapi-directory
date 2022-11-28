import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
**/
export declare class EncryptionConfig extends SpeakeasyBase {
    kmsKeyArn: string;
    roleArn: string;
}
