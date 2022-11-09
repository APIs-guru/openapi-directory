import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AwsAccessKeysResponseAuthenticationModeEnum {
    Credentials = "credentials"
}


export class AwsAccessKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAccessKeysResponseAuthenticationModeEnum;
}
