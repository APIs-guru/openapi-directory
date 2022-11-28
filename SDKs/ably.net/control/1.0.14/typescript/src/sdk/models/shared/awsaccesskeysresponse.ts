import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AwsAccessKeysResponseAuthenticationModeEnum {
    Credentials = "credentials"
}


export class AwsAccessKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAccessKeysResponseAuthenticationModeEnum;
}
