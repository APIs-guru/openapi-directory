import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOrganizationAdminAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOrganizationAdminAccountRequest extends SpeakeasyBase {
    headers: GetOrganizationAdminAccountHeaders;
}
export declare class GetOrganizationAdminAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getOrganizationAdminAccountResponse?: shared.GetOrganizationAdminAccountResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
