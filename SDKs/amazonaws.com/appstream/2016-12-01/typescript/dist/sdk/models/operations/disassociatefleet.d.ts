import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateFleetXAmzTargetEnum {
    PhotonAdminProxyServiceDisassociateFleet = "PhotonAdminProxyService.DisassociateFleet"
}
export declare class DisassociateFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateFleetXAmzTargetEnum;
}
export declare class DisassociateFleetRequest extends SpeakeasyBase {
    headers: DisassociateFleetHeaders;
    request: shared.DisassociateFleetRequest;
}
export declare class DisassociateFleetResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    disassociateFleetResult?: Map<string, any>;
    operationNotPermittedException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
