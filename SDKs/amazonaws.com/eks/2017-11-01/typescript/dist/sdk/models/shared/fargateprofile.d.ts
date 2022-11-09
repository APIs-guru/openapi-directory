import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FargateProfileSelector } from "./fargateprofileselector";
import { FargateProfileStatusEnum } from "./fargateprofilestatusenum";
/**
 * An object representing an Fargate profile.
**/
export declare class FargateProfile extends SpeakeasyBase {
    clusterName?: string;
    createdAt?: Date;
    fargateProfileArn?: string;
    fargateProfileName?: string;
    podExecutionRoleArn?: string;
    selectors?: FargateProfileSelector[];
    status?: FargateProfileStatusEnum;
    subnets?: string[];
    tags?: Map<string, string>;
}
