import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EncryptionConfig
/** 
 * An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
**/
export class EncryptionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KMSKeyArn" })
  kmsKeyArn: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;
}
