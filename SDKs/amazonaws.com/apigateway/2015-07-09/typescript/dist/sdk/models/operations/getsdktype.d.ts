import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSDKTypePathParams extends SpeakeasyBase {
    sdktypeId: string;
}
export declare class GetSDKTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSDKTypeRequest extends SpeakeasyBase {
    pathParams: GetSDKTypePathParams;
    headers: GetSDKTypeHeaders;
}
export declare class GetSDKTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    sdkType?: shared.SDKType;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
