import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVpcPeeringConnectionsXAmzTargetEnum {
    GameLiftDescribeVpcPeeringConnections = "GameLift.DescribeVpcPeeringConnections"
}
export declare class DescribeVpcPeeringConnectionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcPeeringConnectionsXAmzTargetEnum;
}
export declare class DescribeVpcPeeringConnectionsRequest extends SpeakeasyBase {
    headers: DescribeVpcPeeringConnectionsHeaders;
    request: shared.DescribeVpcPeeringConnectionsInput;
}
export declare class DescribeVpcPeeringConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    describeVpcPeeringConnectionsOutput?: shared.DescribeVpcPeeringConnectionsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
