import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceCreateFleet = "PhotonAdminProxyService.CreateFleet"
}
export declare class CreateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFleetXAmzTargetEnum;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    headers: CreateFleetHeaders;
    request: shared.CreateFleetRequest;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    createFleetResult?: shared.CreateFleetResult;
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
