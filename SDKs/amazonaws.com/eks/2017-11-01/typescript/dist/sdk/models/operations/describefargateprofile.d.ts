import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFargateProfilePathParams extends SpeakeasyBase {
    fargateProfileName: string;
    name: string;
}
export declare class DescribeFargateProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeFargateProfileRequest extends SpeakeasyBase {
    pathParams: DescribeFargateProfilePathParams;
    headers: DescribeFargateProfileHeaders;
}
export declare class DescribeFargateProfileResponse extends SpeakeasyBase {
    clientException?: any;
    contentType: string;
    describeFargateProfileResponse?: shared.DescribeFargateProfileResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serverException?: any;
    statusCode: number;
}
