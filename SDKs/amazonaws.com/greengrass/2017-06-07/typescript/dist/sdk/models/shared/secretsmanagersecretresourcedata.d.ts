import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Attributes that define a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions.
**/
export declare class SecretsManagerSecretResourceData extends SpeakeasyBase {
    arn?: string;
    additionalStagingLabelsToDownload?: string[];
}
