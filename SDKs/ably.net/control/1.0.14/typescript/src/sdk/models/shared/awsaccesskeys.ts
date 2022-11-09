import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AwsAccessKeysAuthenticationModeEnum {
    Credentials = "credentials"
}


export class AwsAccessKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId: string;

  @Metadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAccessKeysAuthenticationModeEnum;

  @Metadata({ data: "json, name=secretAccessKey" })
  secretAccessKey: string;
}
