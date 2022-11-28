import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAggregateComplianceByConformancePacksQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeAggregateComplianceByConformancePacksXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConformancePacks = "StarlingDoveService.DescribeAggregateComplianceByConformancePacks"
}
export declare class DescribeAggregateComplianceByConformancePacksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAggregateComplianceByConformancePacksXAmzTargetEnum;
}
export declare class DescribeAggregateComplianceByConformancePacksRequest extends SpeakeasyBase {
    queryParams: DescribeAggregateComplianceByConformancePacksQueryParams;
    headers: DescribeAggregateComplianceByConformancePacksHeaders;
    request: shared.DescribeAggregateComplianceByConformancePacksRequest;
}
export declare class DescribeAggregateComplianceByConformancePacksResponse extends SpeakeasyBase {
    contentType: string;
    describeAggregateComplianceByConformancePacksResponse?: shared.DescribeAggregateComplianceByConformancePacksResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
