import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
**/
export declare class AwsSessionCredentials extends SpeakeasyBase {
    accessKeyId: string;
    secretAccessKey: string;
    sessionToken: string;
}
