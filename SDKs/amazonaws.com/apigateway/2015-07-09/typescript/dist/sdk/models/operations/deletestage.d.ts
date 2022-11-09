import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteStagePathParams extends SpeakeasyBase {
    restapiId: string;
    stageName: string;
}
export declare class DeleteStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStageRequest extends SpeakeasyBase {
    pathParams: DeleteStagePathParams;
    headers: DeleteStageHeaders;
}
export declare class DeleteStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
