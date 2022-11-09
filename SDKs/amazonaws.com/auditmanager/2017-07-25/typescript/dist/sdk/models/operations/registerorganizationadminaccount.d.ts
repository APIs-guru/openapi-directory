import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RegisterOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterOrganizationAdminAccountRequestBody extends SpeakeasyBase {
    adminAccountId: string;
}
export declare class RegisterOrganizationAdminAccountRequest extends SpeakeasyBase {
    headers: RegisterOrganizationAdminAccountHeaders;
    request: RegisterOrganizationAdminAccountRequestBody;
}
export declare class RegisterOrganizationAdminAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    registerOrganizationAdminAccountResponse?: shared.RegisterOrganizationAdminAccountResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
