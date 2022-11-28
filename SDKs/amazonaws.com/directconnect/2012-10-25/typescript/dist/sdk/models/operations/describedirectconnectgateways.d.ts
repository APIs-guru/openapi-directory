import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectConnectGatewaysXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGateways = "OvertureService.DescribeDirectConnectGateways"
}
export declare class DescribeDirectConnectGatewaysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewaysXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewaysRequest extends SpeakeasyBase {
    headers: DescribeDirectConnectGatewaysHeaders;
    request: shared.DescribeDirectConnectGatewaysRequest;
}
export declare class DescribeDirectConnectGatewaysResponse extends SpeakeasyBase {
    contentType: string;
    describeDirectConnectGatewaysResult?: shared.DescribeDirectConnectGatewaysResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
