import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationConfigRuleDetailedStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConfigRuleDetailedStatus = "StarlingDoveService.GetOrganizationConfigRuleDetailedStatus"
}
export declare class GetOrganizationConfigRuleDetailedStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOrganizationConfigRuleDetailedStatusXAmzTargetEnum;
}
export declare class GetOrganizationConfigRuleDetailedStatusRequest extends SpeakeasyBase {
    queryParams: GetOrganizationConfigRuleDetailedStatusQueryParams;
    headers: GetOrganizationConfigRuleDetailedStatusHeaders;
    request: shared.GetOrganizationConfigRuleDetailedStatusRequest;
}
export declare class GetOrganizationConfigRuleDetailedStatusResponse extends SpeakeasyBase {
    contentType: string;
    getOrganizationConfigRuleDetailedStatusResponse?: shared.GetOrganizationConfigRuleDetailedStatusResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConfigRuleException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
