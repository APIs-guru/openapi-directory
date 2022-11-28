import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceUpdateGroup = "AWSCognitoIdentityProviderService.UpdateGroup"
}
export declare class UpdateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGroupXAmzTargetEnum;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    headers: UpdateGroupHeaders;
    request: shared.UpdateGroupRequest;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateGroupResponse?: shared.UpdateGroupResponse;
}
