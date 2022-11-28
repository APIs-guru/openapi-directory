import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRequestValidatorPathParams extends SpeakeasyBase {
    requestvalidatorId: string;
    restapiId: string;
}
export declare class GetRequestValidatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRequestValidatorRequest extends SpeakeasyBase {
    pathParams: GetRequestValidatorPathParams;
    headers: GetRequestValidatorHeaders;
}
export declare class GetRequestValidatorResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    requestValidator?: shared.RequestValidator;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
