import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteOrganizationConformancePackXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConformancePack = "StarlingDoveService.DeleteOrganizationConformancePack"
}
export declare class DeleteOrganizationConformancePackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationConformancePackXAmzTargetEnum;
}
export declare class DeleteOrganizationConformancePackRequest extends SpeakeasyBase {
    headers: DeleteOrganizationConformancePackHeaders;
    request: shared.DeleteOrganizationConformancePackRequest;
}
export declare class DeleteOrganizationConformancePackResponse extends SpeakeasyBase {
    contentType: string;
    noSuchOrganizationConformancePackException?: any;
    organizationAccessDeniedException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
