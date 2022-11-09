import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetComponentQueryParams extends SpeakeasyBase {
    componentBuildVersionArn: string;
}
export declare class GetComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetComponentRequest extends SpeakeasyBase {
    queryParams: GetComponentQueryParams;
    headers: GetComponentHeaders;
}
export declare class GetComponentResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getComponentResponse?: shared.GetComponentResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
