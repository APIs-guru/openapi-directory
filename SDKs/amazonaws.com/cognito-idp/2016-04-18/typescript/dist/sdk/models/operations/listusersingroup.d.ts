import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersInGroupQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum ListUsersInGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListUsersInGroup = "AWSCognitoIdentityProviderService.ListUsersInGroup"
}
export declare class ListUsersInGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsersInGroupXAmzTargetEnum;
}
export declare class ListUsersInGroupRequest extends SpeakeasyBase {
    queryParams: ListUsersInGroupQueryParams;
    headers: ListUsersInGroupHeaders;
    request: shared.ListUsersInGroupRequest;
}
export declare class ListUsersInGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listUsersInGroupResponse?: shared.ListUsersInGroupResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
