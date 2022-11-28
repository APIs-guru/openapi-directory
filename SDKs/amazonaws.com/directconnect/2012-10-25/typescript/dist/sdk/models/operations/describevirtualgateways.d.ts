import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVirtualGatewaysXAmzTargetEnum {
    OvertureServiceDescribeVirtualGateways = "OvertureService.DescribeVirtualGateways"
}
export declare class DescribeVirtualGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVirtualGatewaysXAmzTargetEnum;
}
export declare class DescribeVirtualGatewaysRequest extends SpeakeasyBase {
    headers: DescribeVirtualGatewaysHeaders;
}
export declare class DescribeVirtualGatewaysResponse extends SpeakeasyBase {
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
    virtualGateways?: shared.VirtualGateways;
}
