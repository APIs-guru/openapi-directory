import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeFleetAttributesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeFleetAttributesXAmzTargetEnum {
    GameLiftDescribeFleetAttributes = "GameLift.DescribeFleetAttributes"
}
export declare class DescribeFleetAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFleetAttributesXAmzTargetEnum;
}
export declare class DescribeFleetAttributesRequest extends SpeakeasyBase {
    queryParams: DescribeFleetAttributesQueryParams;
    headers: DescribeFleetAttributesHeaders;
    request: shared.DescribeFleetAttributesInput;
}
export declare class DescribeFleetAttributesResponse extends SpeakeasyBase {
    contentType: string;
    describeFleetAttributesOutput?: shared.DescribeFleetAttributesOutput;
    internalServiceException?: any;
    invalidRequestException?: any;
    notFoundException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
