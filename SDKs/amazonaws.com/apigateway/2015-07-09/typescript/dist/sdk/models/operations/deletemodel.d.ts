import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteModelPathParams extends SpeakeasyBase {
    modelName: string;
    restapiId: string;
}
export declare class DeleteModelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteModelRequest extends SpeakeasyBase {
    pathParams: DeleteModelPathParams;
    headers: DeleteModelHeaders;
}
export declare class DeleteModelResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
