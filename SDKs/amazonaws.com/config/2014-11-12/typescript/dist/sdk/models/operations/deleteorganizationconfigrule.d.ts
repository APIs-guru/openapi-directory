import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteOrganizationConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDeleteOrganizationConfigRule = "StarlingDoveService.DeleteOrganizationConfigRule"
}
export declare class DeleteOrganizationConfigRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOrganizationConfigRuleXAmzTargetEnum;
}
export declare class DeleteOrganizationConfigRuleRequest extends SpeakeasyBase {
    headers: DeleteOrganizationConfigRuleHeaders;
    request: shared.DeleteOrganizationConfigRuleRequest;
}
export declare class DeleteOrganizationConfigRuleResponse extends SpeakeasyBase {
    contentType: string;
    noSuchOrganizationConfigRuleException?: any;
    organizationAccessDeniedException?: any;
    resourceInUseException?: any;
    statusCode: number;
}
