import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminListUserAuthEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum AdminListUserAuthEventsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminListUserAuthEvents = "AWSCognitoIdentityProviderService.AdminListUserAuthEvents"
}
export declare class AdminListUserAuthEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminListUserAuthEventsXAmzTargetEnum;
}
export declare class AdminListUserAuthEventsRequest extends SpeakeasyBase {
    queryParams: AdminListUserAuthEventsQueryParams;
    headers: AdminListUserAuthEventsHeaders;
    request: shared.AdminListUserAuthEventsRequest;
}
export declare class AdminListUserAuthEventsResponse extends SpeakeasyBase {
    adminListUserAuthEventsResponse?: shared.AdminListUserAuthEventsResponse;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
    userPoolAddOnNotEnabledException?: any;
}
