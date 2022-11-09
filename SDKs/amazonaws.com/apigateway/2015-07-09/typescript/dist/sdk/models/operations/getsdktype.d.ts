import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSdkTypePathParams extends SpeakeasyBase {
    sdktypeId: string;
}
export declare class GetSdkTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSdkTypeRequest extends SpeakeasyBase {
    pathParams: GetSdkTypePathParams;
    headers: GetSdkTypeHeaders;
}
export declare class GetSdkTypeResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    sdkType?: shared.SdkType;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
