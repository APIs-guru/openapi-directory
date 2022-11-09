import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateUserXAmzTargetEnum {
    PhotonAdminProxyServiceCreateUser = "PhotonAdminProxyService.CreateUser"
}
export declare class CreateUserHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserXAmzTargetEnum;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    headers: CreateUserHeaders;
    request: shared.CreateUserRequest;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    createUserResult?: Map<string, any>;
    invalidAccountStatusException?: any;
    invalidParameterCombinationException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
}
