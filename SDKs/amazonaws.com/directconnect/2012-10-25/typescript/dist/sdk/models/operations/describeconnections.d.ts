import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionsXAmzTargetEnum {
    OvertureServiceDescribeConnections = "OvertureService.DescribeConnections"
}
export declare class DescribeConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionsXAmzTargetEnum;
}
export declare class DescribeConnectionsRequest extends SpeakeasyBase {
    headers: DescribeConnectionsHeaders;
    request: shared.DescribeConnectionsRequest;
}
export declare class DescribeConnectionsResponse extends SpeakeasyBase {
    connections?: shared.Connections;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
