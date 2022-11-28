import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteContainerRecipeQueryParams extends SpeakeasyBase {
    containerRecipeArn: string;
}
export declare class DeleteContainerRecipeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteContainerRecipeRequest extends SpeakeasyBase {
    queryParams: DeleteContainerRecipeQueryParams;
    headers: DeleteContainerRecipeHeaders;
}
export declare class DeleteContainerRecipeResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    clientException?: any;
    contentType: string;
    deleteContainerRecipeResponse?: shared.DeleteContainerRecipeResponse;
    forbiddenException?: any;
    invalidRequestException?: any;
    resourceDependencyException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
