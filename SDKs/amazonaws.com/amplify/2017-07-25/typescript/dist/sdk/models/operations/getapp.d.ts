import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAppPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class GetAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAppRequest extends SpeakeasyBase {
    pathParams: GetAppPathParams;
    headers: GetAppHeaders;
}
export declare class GetAppResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getAppResult?: shared.GetAppResult;
    internalFailureException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
