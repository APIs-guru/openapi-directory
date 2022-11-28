import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AwsAssumeRoleAuthenticationModeEnum {
    AssumeRole = "assumeRole"
}


export class AwsAssumeRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assumeRoleArn" })
  assumeRoleArn: string;

  @SpeakeasyMetadata({ data: "json, name=authenticationMode" })
  authenticationMode?: AwsAssumeRoleAuthenticationModeEnum;
}
