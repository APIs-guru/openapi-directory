import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CloseTunnelXAmzTargetEnum {
    IoTSecuredTunnelingCloseTunnel = "IoTSecuredTunneling.CloseTunnel"
}
export declare class CloseTunnelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CloseTunnelXAmzTargetEnum;
}
export declare class CloseTunnelRequest extends SpeakeasyBase {
    headers: CloseTunnelHeaders;
    request: shared.CloseTunnelRequest;
}
export declare class CloseTunnelResponse extends SpeakeasyBase {
    closeTunnelResponse?: Map<string, any>;
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
}
