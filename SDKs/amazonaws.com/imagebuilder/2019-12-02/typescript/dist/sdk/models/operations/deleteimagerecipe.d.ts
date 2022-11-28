import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteImageRecipeQueryParams extends SpeakeasyBase {
    imageRecipeArn: string;
}
export declare class DeleteImageRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteImageRecipeRequest extends SpeakeasyBase {
    queryParams: DeleteImageRecipeQueryParams;
    headers: DeleteImageRecipeHeaders;
}
export declare class DeleteImageRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteImageRecipeResponse?: shared.DeleteImageRecipeResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
