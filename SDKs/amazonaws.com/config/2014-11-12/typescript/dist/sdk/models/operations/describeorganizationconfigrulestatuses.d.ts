import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeOrganizationConfigRuleStatusesQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeOrganizationConfigRuleStatusesXAmzTargetEnum {
    StarlingDoveServiceDescribeOrganizationConfigRuleStatuses = "StarlingDoveService.DescribeOrganizationConfigRuleStatuses"
}
export declare class DescribeOrganizationConfigRuleStatusesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeOrganizationConfigRuleStatusesXAmzTargetEnum;
}
export declare class DescribeOrganizationConfigRuleStatusesRequest extends SpeakeasyBase {
    queryParams: DescribeOrganizationConfigRuleStatusesQueryParams;
    headers: DescribeOrganizationConfigRuleStatusesHeaders;
    request: shared.DescribeOrganizationConfigRuleStatusesRequest;
}
export declare class DescribeOrganizationConfigRuleStatusesResponse extends SpeakeasyBase {
    contentType: string;
    describeOrganizationConfigRuleStatusesResponse?: shared.DescribeOrganizationConfigRuleStatusesResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConfigRuleException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
