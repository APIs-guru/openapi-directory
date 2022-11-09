import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSdkPathParams extends SpeakeasyBase {
    restapiId: string;
    sdkType: string;
    stageName: string;
}
export declare class GetSdkQueryParams extends SpeakeasyBase {
    parameters?: Map<string, string>;
}
export declare class GetSdkHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSdkRequest extends SpeakeasyBase {
    pathParams: GetSdkPathParams;
    queryParams: GetSdkQueryParams;
    headers: GetSdkHeaders;
}
export declare class GetSdkResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    sdkResponse?: shared.SdkResponse;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
