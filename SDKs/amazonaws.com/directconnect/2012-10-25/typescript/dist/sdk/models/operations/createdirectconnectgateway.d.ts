import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDirectConnectGatewayXAmzTargetEnum {
    OvertureServiceCreateDirectConnectGateway = "OvertureService.CreateDirectConnectGateway"
}
export declare class CreateDirectConnectGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDirectConnectGatewayXAmzTargetEnum;
}
export declare class CreateDirectConnectGatewayRequest extends SpeakeasyBase {
    headers: CreateDirectConnectGatewayHeaders;
    request: shared.CreateDirectConnectGatewayRequest;
}
export declare class CreateDirectConnectGatewayResponse extends SpeakeasyBase {
    contentType: string;
    createDirectConnectGatewayResult?: shared.CreateDirectConnectGatewayResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
