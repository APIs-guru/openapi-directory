import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeConformancePackComplianceQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeConformancePackComplianceXAmzTargetEnum {
    StarlingDoveServiceDescribeConformancePackCompliance = "StarlingDoveService.DescribeConformancePackCompliance"
}
export declare class DescribeConformancePackComplianceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConformancePackComplianceXAmzTargetEnum;
}
export declare class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
    queryParams: DescribeConformancePackComplianceQueryParams;
    headers: DescribeConformancePackComplianceHeaders;
    request: shared.DescribeConformancePackComplianceRequest;
}
export declare class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
    contentType: string;
    describeConformancePackComplianceResponse?: shared.DescribeConformancePackComplianceResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigRuleInConformancePackException?: any;
    noSuchConformancePackException?: any;
    statusCode: number;
}
