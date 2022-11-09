import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRequestValidatorsPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetRequestValidatorsQueryParams extends SpeakeasyBase {
    limit?: number;
    position?: string;
}
export declare class GetRequestValidatorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRequestValidatorsRequest extends SpeakeasyBase {
    pathParams: GetRequestValidatorsPathParams;
    queryParams: GetRequestValidatorsQueryParams;
    headers: GetRequestValidatorsHeaders;
}
export declare class GetRequestValidatorsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    requestValidators?: shared.RequestValidators;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
