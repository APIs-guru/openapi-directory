import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FargateProfileSelector } from "./fargateprofileselector";
import { FargateProfileStatusEnum } from "./fargateprofilestatusenum";



// FargateProfile
/** 
 * An object representing an Fargate profile.
**/
export class FargateProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=fargateProfileArn" })
  fargateProfileArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fargateProfileName" })
  fargateProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=podExecutionRoleArn" })
  podExecutionRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=selectors", elemType: FargateProfileSelector })
  selectors?: FargateProfileSelector[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FargateProfileStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subnets" })
  subnets?: string[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
