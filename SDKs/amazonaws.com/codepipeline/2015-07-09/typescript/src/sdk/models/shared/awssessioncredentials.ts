import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsSessionCredentials
/** 
 * Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the S3 bucket used to store artifact for the pipeline in AWS CodePipeline.
**/
export class AwsSessionCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey: string;

  @SpeakeasyMetadata({ data: "json, name=sessionToken" })
  sessionToken: string;
}
