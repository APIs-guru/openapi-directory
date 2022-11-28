import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSDKTypesQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetSDKTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSDKTypesRequest extends SpeakeasyBase {
    queryParams: GetSDKTypesQueryParams;
    headers: GetSDKTypesHeaders;
}
export declare class GetSDKTypesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    sdkTypes?: shared.SDKTypes;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
