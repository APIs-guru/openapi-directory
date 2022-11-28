import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdminListGroupsForUserQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum AdminListGroupsForUserXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminListGroupsForUser = "AWSCognitoIdentityProviderService.AdminListGroupsForUser"
}
export declare class AdminListGroupsForUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminListGroupsForUserXAmzTargetEnum;
}
export declare class AdminListGroupsForUserRequest extends SpeakeasyBase {
    queryParams: AdminListGroupsForUserQueryParams;
    headers: AdminListGroupsForUserHeaders;
    request: shared.AdminListGroupsForUserRequest;
}
export declare class AdminListGroupsForUserResponse extends SpeakeasyBase {
    adminListGroupsForUserResponse?: shared.AdminListGroupsForUserResponse;
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
