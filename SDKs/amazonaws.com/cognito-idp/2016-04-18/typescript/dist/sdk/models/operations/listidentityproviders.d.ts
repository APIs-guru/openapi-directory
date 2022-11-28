import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListIdentityProvidersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListIdentityProvidersXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListIdentityProviders = "AWSCognitoIdentityProviderService.ListIdentityProviders"
}
export declare class ListIdentityProvidersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIdentityProvidersXAmzTargetEnum;
}
export declare class ListIdentityProvidersRequest extends SpeakeasyBase {
    queryParams: ListIdentityProvidersQueryParams;
    headers: ListIdentityProvidersHeaders;
    request: shared.ListIdentityProvidersRequest;
}
export declare class ListIdentityProvidersResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listIdentityProvidersResponse?: shared.ListIdentityProvidersResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
