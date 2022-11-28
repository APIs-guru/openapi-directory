import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum {
    OvertureServiceDescribeDirectConnectGatewayAttachments = "OvertureService.DescribeDirectConnectGatewayAttachments"
}
export declare class DescribeDirectConnectGatewayAttachmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum;
}
export declare class DescribeDirectConnectGatewayAttachmentsRequest extends SpeakeasyBase {
    headers: DescribeDirectConnectGatewayAttachmentsHeaders;
    request: shared.DescribeDirectConnectGatewayAttachmentsRequest;
}
export declare class DescribeDirectConnectGatewayAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    describeDirectConnectGatewayAttachmentsResult?: shared.DescribeDirectConnectGatewayAttachmentsResult;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
