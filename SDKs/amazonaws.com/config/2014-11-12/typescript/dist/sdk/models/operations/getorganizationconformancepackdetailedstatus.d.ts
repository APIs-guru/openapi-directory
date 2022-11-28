import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrganizationConformancePackDetailedStatusQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetOrganizationConformancePackDetailedStatusXAmzTargetEnum {
    StarlingDoveServiceGetOrganizationConformancePackDetailedStatus = "StarlingDoveService.GetOrganizationConformancePackDetailedStatus"
}
export declare class GetOrganizationConformancePackDetailedStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOrganizationConformancePackDetailedStatusXAmzTargetEnum;
}
export declare class GetOrganizationConformancePackDetailedStatusRequest extends SpeakeasyBase {
    queryParams: GetOrganizationConformancePackDetailedStatusQueryParams;
    headers: GetOrganizationConformancePackDetailedStatusHeaders;
    request: shared.GetOrganizationConformancePackDetailedStatusRequest;
}
export declare class GetOrganizationConformancePackDetailedStatusResponse extends SpeakeasyBase {
    contentType: string;
    getOrganizationConformancePackDetailedStatusResponse?: shared.GetOrganizationConformancePackDetailedStatusResponse;
    invalidLimitException?: any;
    invalidNextTokenException?: any;
    noSuchOrganizationConformancePackException?: any;
    organizationAccessDeniedException?: any;
    statusCode: number;
}
