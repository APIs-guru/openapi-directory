import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRestApiPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class DeleteRestApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRestApiRequest extends SpeakeasyBase {
    pathParams: DeleteRestApiPathParams;
    headers: DeleteRestApiHeaders;
}
export declare class DeleteRestApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
