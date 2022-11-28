import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConfigurationAggregatorSourcesStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregatorSourcesStatus = "StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus"
}
export declare class DescribeConfigurationAggregatorSourcesStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationAggregatorSourcesStatusXAmzTargetEnum;
}
export declare class DescribeConfigurationAggregatorSourcesStatusRequest extends SpeakeasyBase {
    queryParams: DescribeConfigurationAggregatorSourcesStatusQueryParams;
    headers: DescribeConfigurationAggregatorSourcesStatusHeaders;
    request: shared.DescribeConfigurationAggregatorSourcesStatusRequest;
}
export declare class DescribeConfigurationAggregatorSourcesStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigurationAggregatorSourcesStatusResponse?: shared.DescribeConfigurationAggregatorSourcesStatusResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
}
