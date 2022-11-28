import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContainerRecipeQueryParams extends SpeakeasyBase {
    containerRecipeArn: string;
}
export declare class GetContainerRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetContainerRecipeRequest extends SpeakeasyBase {
    queryParams: GetContainerRecipeQueryParams;
    headers: GetContainerRecipeHeaders;
}
export declare class GetContainerRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getContainerRecipeResponse?: shared.GetContainerRecipeResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
