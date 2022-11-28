import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMinuteUsageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMinuteUsageRequestBody extends SpeakeasyBase {
    month: number;
    year: number;
}
export declare class GetMinuteUsageRequest extends SpeakeasyBase {
    headers: GetMinuteUsageHeaders;
    request: GetMinuteUsageRequestBody;
}
export declare class GetMinuteUsageResponse extends SpeakeasyBase {
    contentType: string;
    dependencyException?: any;
    getMinuteUsageResponse?: shared.GetMinuteUsageResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
