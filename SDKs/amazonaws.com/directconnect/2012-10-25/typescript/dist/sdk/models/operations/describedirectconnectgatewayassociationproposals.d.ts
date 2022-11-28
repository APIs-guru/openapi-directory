import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAssociationProposals = "OvertureService.DescribeDirectConnectGatewayAssociationProposals"
}
export declare class DescribeDirectConnectGatewayAssociationProposalsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAssociationProposalsRequest extends SpeakeasyBase {
    headers: DescribeDirectConnectGatewayAssociationProposalsHeaders;
    request: shared.DescribeDirectConnectGatewayAssociationProposalsRequest;
}
export declare class DescribeDirectConnectGatewayAssociationProposalsResponse extends SpeakeasyBase {
    contentType: string;
    describeDirectConnectGatewayAssociationProposalsResult?: shared.DescribeDirectConnectGatewayAssociationProposalsResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
