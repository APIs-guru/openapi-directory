import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartFleetXAmzTargetEnum {
    PhotonAdminProxyServiceStartFleet = "PhotonAdminProxyService.StartFleet"
}
export declare class StartFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartFleetXAmzTargetEnum;
}
export declare class StartFleetRequest extends SpeakeasyBase {
    headers: StartFleetHeaders;
    request: shared.StartFleetRequest;
}
export declare class StartFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    invalidAccountStatusException?: any;
    invalidRoleException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    requestLimitExceededException?: any;
    resourceNotAvailableException?: any;
    resourceNotFoundException?: any;
    startFleetResult?: Map<string, any>;
    statusCode: number;
}
