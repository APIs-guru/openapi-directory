import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetImagePolicyQueryParams extends SpeakeasyBase {
    imageArn: string;
}
export declare class GetImagePolicyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImagePolicyRequest extends SpeakeasyBase {
    queryParams: GetImagePolicyQueryParams;
    headers: GetImagePolicyHeaders;
}
export declare class GetImagePolicyResponse extends SpeakeasyBase {
    callRateLimitExceededException?: any;
    contentType: string;
    forbiddenException?: any;
    getImagePolicyResponse?: shared.GetImagePolicyResponse;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
