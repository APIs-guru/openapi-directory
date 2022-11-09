import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetImageQueryParams extends SpeakeasyBase {
    imageBuildVersionArn: string;
}
export declare class GetImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImageRequest extends SpeakeasyBase {
    queryParams: GetImageQueryParams;
    headers: GetImageHeaders;
}
export declare class GetImageResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getImageResponse?: shared.GetImageResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
