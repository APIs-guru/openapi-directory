import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteFleetXAmzTargetEnum {
    PhotonAdminProxyServiceDeleteFleet = "PhotonAdminProxyService.DeleteFleet"
}
export declare class DeleteFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetXAmzTargetEnum;
}
export declare class DeleteFleetRequest extends SpeakeasyBase {
    headers: DeleteFleetHeaders;
    request: shared.DeleteFleetRequest;
}
export declare class DeleteFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteFleetResult?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
