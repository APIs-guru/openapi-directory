import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageRecipePolicyQueryParams extends SpeakeasyBase {
    imageRecipeArn: string;
}
export declare class GetImageRecipePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImageRecipePolicyRequest extends SpeakeasyBase {
    queryParams: GetImageRecipePolicyQueryParams;
    headers: GetImageRecipePolicyHeaders;
}
export declare class GetImageRecipePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    contentType: string;
    forbiddenException?: any;
    getImageRecipePolicyResponse?: shared.GetImageRecipePolicyResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
