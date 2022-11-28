import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOrganizationConfigRulesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeOrganizationConfigRulesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRules = "StarlingDoveService.DescribeOrganizationConfigRules"
}
export declare class DescribeOrganizationConfigRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationConfigRulesXAmzTargetEnum;
}
export declare class DescribeOrganizationConfigRulesRequest extends SpeakeasyBase {
    queryParams: DescribeOrganizationConfigRulesQueryParams;
    headers: DescribeOrganizationConfigRulesHeaders;
    request: shared.DescribeOrganizationConfigRulesRequest;
}
export declare class DescribeOrganizationConfigRulesResponse extends SpeakeasyBase {
    contentType: string;
    describeOrganizationConfigRulesResponse?: shared.DescribeOrganizationConfigRulesResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConfigRuleException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
