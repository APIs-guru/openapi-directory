import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageRecipeQueryParams extends SpeakeasyBase {
    imageRecipeArn: string;
}
export declare class GetImageRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImageRecipeRequest extends SpeakeasyBase {
    queryParams: GetImageRecipeQueryParams;
    headers: GetImageRecipeHeaders;
}
export declare class GetImageRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    forbiddenException?: any;
    getImageRecipeResponse?: shared.GetImageRecipeResponse;
    invalidRequestException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
