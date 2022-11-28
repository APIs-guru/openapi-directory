import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceRoleForAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetServiceRoleForAccountRequest extends SpeakeasyBase {
    headers: GetServiceRoleForAccountHeaders;
}
export declare class GetServiceRoleForAccountResponse extends SpeakeasyBase {
    contentType: string;
    getServiceRoleForAccountResponse?: shared.GetServiceRoleForAccountResponse;
    internalServerErrorException?: any;
    statusCode: number;
}
