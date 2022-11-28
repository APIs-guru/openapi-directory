import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServicePutOrganizationConformancePack = "StarlingDoveService.PutOrganizationConformancePack"
}
export declare class PutOrganizationConformancePackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutOrganizationConformancePackXAmzTargetEnum;
}
export declare class PutOrganizationConformancePackRequest extends SpeakeasyBase {
    headers: PutOrganizationConformancePackHeaders;
    request: shared.PutOrganizationConformancePackRequest;
}
export declare class PutOrganizationConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    insufficientPermissionsException?: any;
    maxNumberOfOrganizationConformancePacksExceededException?: any;
    noAvailableOrganizationException?: any;
    organizationAccessDeniedException?: any;
    organizationAllFeaturesNotEnabledException?: any;
    organizationConformancePackTemplateValidationException?: any;
    putOrganizationConformancePackResponse?: shared.PutOrganizationConformancePackResponse;
    resourceInUseException?: any;
    statusCode: number;
    validationException?: any;
}
