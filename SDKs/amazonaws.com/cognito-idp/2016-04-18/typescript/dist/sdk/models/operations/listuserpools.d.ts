import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListUserPoolsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListUserPoolsXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListUserPools = "AWSCognitoIdentityProviderService.ListUserPools"
}
export declare class ListUserPoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListUserPoolsXAmzTargetEnum;
}
export declare class ListUserPoolsRequest extends SpeakeasyBase {
    queryParams: ListUserPoolsQueryParams;
    headers: ListUserPoolsHeaders;
    request: shared.ListUserPoolsRequest;
}
export declare class ListUserPoolsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listUserPoolsResponse?: shared.ListUserPoolsResponse;
    notAuthorizedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
