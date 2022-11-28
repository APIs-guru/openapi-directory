import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AdminAddUserToGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceAdminAddUserToGroup = "AWSCognitoIdentityProviderService.AdminAddUserToGroup"
}
export declare class AdminAddUserToGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AdminAddUserToGroupXAmzTargetEnum;
}
export declare class AdminAddUserToGroupRequest extends SpeakeasyBase {
    headers: AdminAddUserToGroupHeaders;
    request: shared.AdminAddUserToGroupRequest;
}
export declare class AdminAddUserToGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    userNotFoundException?: any;
}
