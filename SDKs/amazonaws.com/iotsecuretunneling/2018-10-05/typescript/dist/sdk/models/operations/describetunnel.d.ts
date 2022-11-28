import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTunnelXAmzTargetEnum {
    IoTSecuredTunnelingDescribeTunnel = "IoTSecuredTunneling.DescribeTunnel"
}
export declare class DescribeTunnelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTunnelXAmzTargetEnum;
}
export declare class DescribeTunnelRequest extends SpeakeasyBase {
    headers: DescribeTunnelHeaders;
    request: shared.DescribeTunnelRequest;
}
export declare class DescribeTunnelResponse extends SpeakeasyBase {
    contentType: string;
    describeTunnelResponse?: shared.DescribeTunnelResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
