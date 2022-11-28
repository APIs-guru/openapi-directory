import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceCreateImageBuilder = "PhotonAdminProxyService.CreateImageBuilder"
}
export declare class CreateImageBuilderHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageBuilderXAmzTargetEnum;
}
export declare class CreateImageBuilderRequest extends SpeakeasyBase {
    headers: CreateImageBuilderHeaders;
    request: shared.CreateImageBuilderRequest;
}
export declare class CreateImageBuilderResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createImageBuilderResult?: shared.CreateImageBuilderResult;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    invalidParameterCombinationException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    requestLimitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
