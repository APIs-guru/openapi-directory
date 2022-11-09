import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AwsAssumeRoleAuthenticationModeEnum {
    AssumeRole = "assumeRole"
}


export class AwsAssumeRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=assumeRoleArn" })
  assumeRoleArn: string;

  @Metadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAssumeRoleAuthenticationModeEnum;
}
