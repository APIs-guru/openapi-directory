import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSDKPathParams extends SpeakeasyBase {
    restapiId: string;
    sdkType: string;
    stageName: string;
}
export declare class GetSDKQueryParams extends SpeakeasyBase {
    parameters?: Map<string, string>;
}
export declare class GetSDKHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSDKRequest extends SpeakeasyBase {
    pathParams: GetSDKPathParams;
    queryParams: GetSDKQueryParams;
    headers: GetSDKHeaders;
}
export declare class GetSDKResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    sdkResponse?: shared.SDKResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
