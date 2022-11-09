import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStagesPathParams extends SpeakeasyBase {
    restapiId: string;
}
export declare class GetStagesQueryParams extends SpeakeasyBase {
    deploymentId?: string;
}
export declare class GetStagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStagesRequest extends SpeakeasyBase {
    pathParams: GetStagesPathParams;
    queryParams: GetStagesQueryParams;
    headers: GetStagesHeaders;
}
export declare class GetStagesResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    limitExceededException?: any;
    notFoundException?: any;
    stages?: shared.Stages;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
