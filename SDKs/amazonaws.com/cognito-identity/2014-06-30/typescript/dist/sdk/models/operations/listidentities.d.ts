import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListIdentitiesXAmzTargetEnum {
    AwsCognitoIdentityServiceListIdentities = "AWSCognitoIdentityService.ListIdentities"
}
export declare class ListIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIdentitiesXAmzTargetEnum;
}
export declare class ListIdentitiesRequest extends SpeakeasyBase {
    headers: ListIdentitiesHeaders;
    request: shared.ListIdentitiesInput;
}
export declare class ListIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    listIdentitiesResponse?: shared.ListIdentitiesResponse;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
