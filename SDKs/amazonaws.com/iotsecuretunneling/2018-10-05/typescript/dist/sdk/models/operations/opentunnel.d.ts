import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum OpenTunnelXAmzTargetEnum {
    IoTSecuredTunnelingOpenTunnel = "IoTSecuredTunneling.OpenTunnel"
}
export declare class OpenTunnelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: OpenTunnelXAmzTargetEnum;
}
export declare class OpenTunnelRequest extends SpeakeasyBase {
    headers: OpenTunnelHeaders;
    request: shared.OpenTunnelRequest;
}
export declare class OpenTunnelResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededException?: any;
    openTunnelResponse?: shared.OpenTunnelResponse;
    statusCode: number;
}
