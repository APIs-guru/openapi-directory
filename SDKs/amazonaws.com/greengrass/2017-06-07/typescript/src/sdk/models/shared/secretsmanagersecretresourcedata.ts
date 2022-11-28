import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SecretsManagerSecretResourceData
/** 
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
**/
export class SecretsManagerSecretResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=AdditionalStagingLabelsToDownload" })
  additionalStagingLabelsToDownload?: string[];
}
