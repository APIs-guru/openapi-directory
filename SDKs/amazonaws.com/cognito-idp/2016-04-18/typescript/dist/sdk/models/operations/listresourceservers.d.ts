import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourceServersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListResourceServersXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceListResourceServers = "AWSCognitoIdentityProviderService.ListResourceServers"
}
export declare class ListResourceServersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceServersXAmzTargetEnum;
}
export declare class ListResourceServersRequest extends SpeakeasyBase {
    queryParams: ListResourceServersQueryParams;
    headers: ListResourceServersHeaders;
    request: shared.ListResourceServersRequest;
}
export declare class ListResourceServersResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listResourceServersResponse?: shared.ListResourceServersResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
