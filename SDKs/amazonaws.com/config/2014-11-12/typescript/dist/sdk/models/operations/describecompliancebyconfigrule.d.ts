import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeComplianceByConfigRuleQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum DescribeComplianceByConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDescribeComplianceByConfigRule = "StarlingDoveService.DescribeComplianceByConfigRule"
}
export declare class DescribeComplianceByConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeComplianceByConfigRuleXAmzTargetEnum;
}
export declare class DescribeComplianceByConfigRuleRequest extends SpeakeasyBase {
    queryParams: DescribeComplianceByConfigRuleQueryParams;
    headers: DescribeComplianceByConfigRuleHeaders;
    request: shared.DescribeComplianceByConfigRuleRequest;
}
export declare class DescribeComplianceByConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    describeComplianceByConfigRuleResponse?: shared.DescribeComplianceByConfigRuleResponse;
    invalidNextTokenException?: any;
    invalidParameterValueException?: any;
    noSuchConfigRuleException?: any;
    statusCode: number;
}
