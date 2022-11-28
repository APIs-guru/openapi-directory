import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUsersQueryParams extends SpeakeasyBase {
    limit?: string;
    paginationToken?: string;
}
export declare enum ListUsersXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListUsers = "AWSCognitoIdentityProviderService.ListUsers"
}
export declare class ListUsersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUsersXAmzTargetEnum;
}
export declare class ListUsersRequest extends SpeakeasyBase {
    queryParams: ListUsersQueryParams;
    headers: ListUsersHeaders;
    request: shared.ListUsersRequest;
}
export declare class ListUsersResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listUsersResponse?: shared.ListUsersResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
