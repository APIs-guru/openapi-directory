import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetLocationAttributesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeFleetLocationAttributesXAmzTargetEnum {
    GameLiftDescribeFleetLocationAttributes = "GameLift.DescribeFleetLocationAttributes"
}
export declare class DescribeFleetLocationAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetLocationAttributesXAmzTargetEnum;
}
export declare class DescribeFleetLocationAttributesRequest extends SpeakeasyBase {
    queryParams: DescribeFleetLocationAttributesQueryParams;
    headers: DescribeFleetLocationAttributesHeaders;
    request: shared.DescribeFleetLocationAttributesInput;
}
export declare class DescribeFleetLocationAttributesResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetLocationAttributesOutput?: shared.DescribeFleetLocationAttributesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
