import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceGetGroup = "AWSCognitoIdentityProviderService.GetGroup"
}
export declare class GetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGroupXAmzTargetEnum;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    headers: GetGroupHeaders;
    request: shared.GetGroupRequest;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    getGroupResponse?: shared.GetGroupResponse;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
