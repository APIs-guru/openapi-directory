import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTargetsForSecurityProfilePathParams extends SpeakeasyBase {
    securityProfileName: string;
}
export declare class ListTargetsForSecurityProfileQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTargetsForSecurityProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTargetsForSecurityProfileRequest extends SpeakeasyBase {
    pathParams: ListTargetsForSecurityProfilePathParams;
    queryParams: ListTargetsForSecurityProfileQueryParams;
    headers: ListTargetsForSecurityProfileHeaders;
}
export declare class ListTargetsForSecurityProfileResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listTargetsForSecurityProfileResponse?: shared.ListTargetsForSecurityProfileResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
