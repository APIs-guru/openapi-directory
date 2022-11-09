import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StopFleetXAmzTargetEnum {
    PhotonAdminProxyServiceStopFleet = "PhotonAdminProxyService.StopFleet"
}
export declare class StopFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopFleetXAmzTargetEnum;
}
export declare class StopFleetRequest extends SpeakeasyBase {
    headers: StopFleetHeaders;
    request: shared.StopFleetRequest;
}
export declare class StopFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    stopFleetResult?: Map<string, any>;
}
