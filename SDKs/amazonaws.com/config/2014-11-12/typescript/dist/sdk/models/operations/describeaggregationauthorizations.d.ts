import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAggregationAuthorizationsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeAggregationAuthorizationsXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregationAuthorizations = "StarlingDoveService.DescribeAggregationAuthorizations"
}
export declare class DescribeAggregationAuthorizationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAggregationAuthorizationsXAmzTargetEnum;
}
export declare class DescribeAggregationAuthorizationsRequest extends SpeakeasyBase {
    queryParams: DescribeAggregationAuthorizationsQueryParams;
    headers: DescribeAggregationAuthorizationsHeaders;
    request: shared.DescribeAggregationAuthorizationsRequest;
}
export declare class DescribeAggregationAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    describeAggregationAuthorizationsResponse?: shared.DescribeAggregationAuthorizationsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    statusCode: number;
}
