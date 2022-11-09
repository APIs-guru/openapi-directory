import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FargateProfileSelector } from "./fargateprofileselector";
import { FargateProfileStatusEnum } from "./fargateprofilestatusenum";


// FargateProfile
/** 
 * An object representing an Fargate profile.
**/
export class FargateProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=fargateProfileArn" })
  fargateProfileArn?: string;

  @Metadata({ data: "json, name=fargateProfileName" })
  fargateProfileName?: string;

  @Metadata({ data: "json, name=podExecutionRoleArn" })
  podExecutionRoleArn?: string;

  @Metadata({ data: "json, name=selectors", elemType: shared.FargateProfileSelector })
  selectors?: FargateProfileSelector[];

  @Metadata({ data: "json, name=status" })
  status?: FargateProfileStatusEnum;

  @Metadata({ data: "json, name=subnets" })
  subnets?: string[];

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
