import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConfigurationAggregatorsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConfigurationAggregatorsXAmzTargetEnum {
    StarlingDoveServiceDescribeConfigurationAggregators = "StarlingDoveService.DescribeConfigurationAggregators"
}
export declare class DescribeConfigurationAggregatorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConfigurationAggregatorsXAmzTargetEnum;
}
export declare class DescribeConfigurationAggregatorsRequest extends SpeakeasyBase {
    queryParams: DescribeConfigurationAggregatorsQueryParams;
    headers: DescribeConfigurationAggregatorsHeaders;
    request: shared.DescribeConfigurationAggregatorsRequest;
}
export declare class DescribeConfigurationAggregatorsResponse extends SpeakeasyBase {
    contentType: string;
    describeConfigurationAggregatorsResponse?: shared.DescribeConfigurationAggregatorsResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
}
