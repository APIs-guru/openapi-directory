import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AwsAccessKeysAuthenticationModeEnum {
    Credentials = "credentials"
}


export class AwsAccessKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAccessKeysAuthenticationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=secretAccessKey" })
  secretAccessKey: string;
}
