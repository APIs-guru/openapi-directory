import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDirectConnectGatewayXAmzTargetEnum {
    OvertureServiceDeleteDirectConnectGateway = "OvertureService.DeleteDirectConnectGateway"
}
export declare class DeleteDirectConnectGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDirectConnectGatewayXAmzTargetEnum;
}
export declare class DeleteDirectConnectGatewayRequest extends SpeakeasyBase {
    headers: DeleteDirectConnectGatewayHeaders;
    request: shared.DeleteDirectConnectGatewayRequest;
}
export declare class DeleteDirectConnectGatewayResponse extends SpeakeasyBase {
    contentType: string;
    deleteDirectConnectGatewayResult?: shared.DeleteDirectConnectGatewayResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
