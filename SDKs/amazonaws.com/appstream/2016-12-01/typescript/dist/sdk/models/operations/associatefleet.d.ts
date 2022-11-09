import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceAssociateFleet = "PhotonAdminProxyService.AssociateFleet"
}
export declare class AssociateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFleetXAmzTargetEnum;
}
export declare class AssociateFleetRequest extends SpeakeasyBase {
    headers: AssociateFleetHeaders;
    request: shared.AssociateFleetRequest;
}
export declare class AssociateFleetResponse extends SpeakeasyBase {
    associateFleetResult?: Map<string, any>;
    concurrentModificationException?: any;
    contentType: string;
    incompatibleImageException?: any;
    invalidAccountStatusException?: any;
    limitExceededException?: any;
    operationNotPermittedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
