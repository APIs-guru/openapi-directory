import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeregisterOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeregisterOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    adminAccountId?: string;
}
export declare class DeregisterOrganizationAdminAccountRequest extends SpeakeasyBase {
    headers: DeregisterOrganizationAdminAccountHeaders;
    request: DeregisterOrganizationAdminAccountRequestBody;
}
export declare class DeregisterOrganizationAdminAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deregisterOrganizationAdminAccountResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
