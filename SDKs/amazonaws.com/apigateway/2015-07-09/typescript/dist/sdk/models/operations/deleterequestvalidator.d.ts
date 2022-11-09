import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteRequestValidatorPathParams extends SpeakeasyBase {
    requestvalidatorId: string;
    restapiId: string;
}
export declare class DeleteRequestValidatorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRequestValidatorRequest extends SpeakeasyBase {
    pathParams: DeleteRequestValidatorPathParams;
    headers: DeleteRequestValidatorHeaders;
}
export declare class DeleteRequestValidatorResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
