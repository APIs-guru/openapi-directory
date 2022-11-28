import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectConnectGatewayAssociationsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociations = "OvertureService.DescribeDirectConnectGatewayAssociations"
}
export declare class DescribeDirectConnectGatewayAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAssociationsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAssociationsRequest extends SpeakeasyBase {
    headers: DescribeDirectConnectGatewayAssociationsHeaders;
    request: shared.DescribeDirectConnectGatewayAssociationsRequest;
}
export declare class DescribeDirectConnectGatewayAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    describeDirectConnectGatewayAssociationsResult?: shared.DescribeDirectConnectGatewayAssociationsResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
