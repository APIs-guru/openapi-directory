import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetContainerRecipePolicyQueryParams extends SpeakeasyBase {
    containerRecipeArn: string;
}
export declare class GetContainerRecipePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetContainerRecipePolicyRequest extends SpeakeasyBase {
    queryParams: GetContainerRecipePolicyQueryParams;
    headers: GetContainerRecipePolicyHeaders;
}
export declare class GetContainerRecipePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    contentType: string;
    forbiddenException?: any;
    getContainerRecipePolicyResponse?: shared.GetContainerRecipePolicyResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
