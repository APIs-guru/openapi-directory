import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateFargateProfilePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CreateFargateProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFargateProfileRequestBody extends SpeakeasyBase {
    clientRequestToken?: string;
    fargateProfileName: string;
    podExecutionRoleArn: string;
    selectors?: shared.FargateProfileSelector[];
    subnets?: string[];
    tags?: Map<string, string>;
}
export declare class CreateFargateProfileRequest extends SpeakeasyBase {
    pathParams: CreateFargateProfilePathParams;
    headers: CreateFargateProfileHeaders;
    request: CreateFargateProfileRequestBody;
}
export declare class CreateFargateProfileResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    createFargateProfileResponse?: shared.CreateFargateProfileResponse;
    invalidParameterException?: any;
    invalidRequestException?: any;
    resourceLimitExceededException?: any;
    serverException?: any;
    statusCode: number;
    unsupportedAvailabilityZoneException?: any;
}
