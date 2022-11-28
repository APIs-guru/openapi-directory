import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeVpcPeeringAuthorizationsXAmzTargetEnum {
    GameLiftDescribeVpcPeeringAuthorizations = "GameLift.DescribeVpcPeeringAuthorizations"
}
export declare class DescribeVpcPeeringAuthorizationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeVpcPeeringAuthorizationsXAmzTargetEnum;
}
export declare class DescribeVpcPeeringAuthorizationsRequest extends SpeakeasyBase {
    headers: DescribeVpcPeeringAuthorizationsHeaders;
    request: Map<string, any>;
}
export declare class DescribeVpcPeeringAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    describeVpcPeeringAuthorizationsOutput?: shared.DescribeVpcPeeringAuthorizationsOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
