import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateStackXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateStack = "PhotonAdminProxyService.UpdateStack"
}
export declare class UpdateStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateStackXAmzTargetEnum;
}
export declare class UpdateStackRequest extends SpeakeasyBase {
    headers: UpdateStackHeaders;
    request: shared.UpdateStackRequest;
}
export declare class UpdateStackResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    invalidParameterCombinationException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateStackResult?: shared.UpdateStackResult;
}
