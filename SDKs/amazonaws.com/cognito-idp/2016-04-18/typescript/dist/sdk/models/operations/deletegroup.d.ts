import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteGroupXAmzTargetEnum {
    AwsCognitoIdentityProviderServiceDeleteGroup = "AWSCognitoIdentityProviderService.DeleteGroup"
}
export declare class DeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGroupXAmzTargetEnum;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    headers: DeleteGroupHeaders;
    request: shared.DeleteGroupRequest;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalErrorException?: any;
    invalidParameterException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
