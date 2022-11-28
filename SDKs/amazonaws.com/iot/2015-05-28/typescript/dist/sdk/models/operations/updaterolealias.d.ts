import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRoleAliasPathParams extends SpeakeasyBase {
    roleAlias: string;
}
export declare class UpdateRoleAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateRoleAliasRequestBody extends SpeakeasyBase {
    credentialDurationSeconds?: number;
    roleArn?: string;
}
export declare class UpdateRoleAliasRequest extends SpeakeasyBase {
    pathParams: UpdateRoleAliasPathParams;
    headers: UpdateRoleAliasHeaders;
    request: UpdateRoleAliasRequestBody;
}
export declare class UpdateRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
    updateRoleAliasResponse?: shared.UpdateRoleAliasResponse;
}
