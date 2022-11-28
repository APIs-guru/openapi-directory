import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeAggregateComplianceByConfigRulesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeAggregateComplianceByConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregateComplianceByConfigRules = "StarlingDoveService.DescribeAggregateComplianceByConfigRules"
}
export declare class DescribeAggregateComplianceByConfigRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAggregateComplianceByConfigRulesXAmzTargetEnum;
}
export declare class DescribeAggregateComplianceByConfigRulesRequest extends SpeakeasyBase {
    queryParams: DescribeAggregateComplianceByConfigRulesQueryParams;
    headers: DescribeAggregateComplianceByConfigRulesHeaders;
    request: shared.DescribeAggregateComplianceByConfigRulesRequest;
}
export declare class DescribeAggregateComplianceByConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    describeAggregateComplianceByConfigRulesResponse?: shared.DescribeAggregateComplianceByConfigRulesResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    validationException?: any;
}
