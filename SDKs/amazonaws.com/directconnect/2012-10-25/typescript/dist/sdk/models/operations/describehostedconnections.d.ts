import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHostedConnectionsXAmzTargetEnum {
    OvertureServiceDescribeHostedConnections = "OvertureService.DescribeHostedConnections"
}
export declare class DescribeHostedConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHostedConnectionsXAmzTargetEnum;
}
export declare class DescribeHostedConnectionsRequest extends SpeakeasyBase {
    headers: DescribeHostedConnectionsHeaders;
    request: shared.DescribeHostedConnectionsRequest;
}
export declare class DescribeHostedConnectionsResponse extends SpeakeasyBase {
    connections?: shared.Connections;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
