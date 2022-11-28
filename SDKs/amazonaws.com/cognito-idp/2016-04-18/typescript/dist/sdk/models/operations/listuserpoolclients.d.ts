import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUserPoolClientsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListUserPoolClientsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListUserPoolClients = "AWSCognitoIdentityProviderService.ListUserPoolClients"
}
export declare class ListUserPoolClientsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserPoolClientsXAmzTargetEnum;
}
export declare class ListUserPoolClientsRequest extends SpeakeasyBase {
    queryParams: ListUserPoolClientsQueryParams;
    headers: ListUserPoolClientsHeaders;
    request: shared.ListUserPoolClientsRequest;
}
export declare class ListUserPoolClientsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listUserPoolClientsResponse?: shared.ListUserPoolClientsResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
