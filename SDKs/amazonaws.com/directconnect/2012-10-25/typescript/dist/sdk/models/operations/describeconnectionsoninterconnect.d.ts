import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionsOnInterconnectXAmzTargetEnum {
    OvertureServiceDescribeConnectionsOnInterconnect = "OvertureService.DescribeConnectionsOnInterconnect"
}
export declare class DescribeConnectionsOnInterconnectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionsOnInterconnectXAmzTargetEnum;
}
export declare class DescribeConnectionsOnInterconnectRequest extends SpeakeasyBase {
    headers: DescribeConnectionsOnInterconnectHeaders;
    request: shared.DescribeConnectionsOnInterconnectRequest;
}
export declare class DescribeConnectionsOnInterconnectResponse extends SpeakeasyBase {
    connections?: shared.Connections;
    contentType: string;
    directConnectClientException?: any;
    directConnectServerException?: any;
    statusCode: number;
}
