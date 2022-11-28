import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSecurityProfilesForTargetQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    recursive?: boolean;
    securityProfileTargetArn: string;
}
export declare class ListSecurityProfilesForTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSecurityProfilesForTargetRequest extends SpeakeasyBase {
    queryParams: ListSecurityProfilesForTargetQueryParams;
    headers: ListSecurityProfilesForTargetHeaders;
}
export declare class ListSecurityProfilesForTargetResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listSecurityProfilesForTargetResponse?: shared.ListSecurityProfilesForTargetResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
