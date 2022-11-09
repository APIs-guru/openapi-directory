import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListIdentityPoolsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListIdentityPoolsXAmzTargetEnum {
    AwsCognitoIdentityServiceListIdentityPools = "AWSCognitoIdentityService.ListIdentityPools"
}
export declare class ListIdentityPoolsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIdentityPoolsXAmzTargetEnum;
}
export declare class ListIdentityPoolsRequest extends SpeakeasyBase {
    queryParams: ListIdentityPoolsQueryParams;
    headers: ListIdentityPoolsHeaders;
    request: shared.ListIdentityPoolsInput;
}
export declare class ListIdentityPoolsResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listIdentityPoolsResponse?: shared.ListIdentityPoolsResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
