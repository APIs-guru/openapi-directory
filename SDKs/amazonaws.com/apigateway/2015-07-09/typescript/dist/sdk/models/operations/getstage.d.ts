import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStagePathParams extends SpeakeasyBase {
    restapiId: string;
    stageName: string;
}
export declare class GetStageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStageRequest extends SpeakeasyBase {
    pathParams: GetStagePathParams;
    headers: GetStageHeaders;
}
export declare class GetStageResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    stage?: shared.Stage;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
