import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminRemoveUserFromGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminRemoveUserFromGroup = "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup"
}
export declare class AdminRemoveUserFromGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminRemoveUserFromGroupXAmzTargetEnum;
}
export declare class AdminRemoveUserFromGroupRequest extends SpeakeasyBase {
    headers: AdminRemoveUserFromGroupHeaders;
    request: shared.AdminRemoveUserFromGroupRequest;
}
export declare class AdminRemoveUserFromGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
