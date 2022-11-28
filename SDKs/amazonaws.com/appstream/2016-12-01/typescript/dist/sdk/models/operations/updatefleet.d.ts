import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceUpdateFleet = "PhotonAdminProxyService.UpdateFleet"
}
export declare class UpdateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetXAmzTargetEnum;
}
export declare class UpdateFleetRequest extends SpeakeasyBase {
    headers: UpdateFleetHeaders;
    request: shared.UpdateFleetRequest;
}
export declare class UpdateFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    invalidParameterCombinationException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    requestLimitExceededException?: any;
    resourceInUseException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateFleetResult?: shared.UpdateFleetResult;
}
