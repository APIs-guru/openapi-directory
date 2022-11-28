import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRoleAliasPathParams extends SpeakeasyBase {
    roleAlias: string;
}
export declare class DeleteRoleAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRoleAliasRequest extends SpeakeasyBase {
    pathParams: DeleteRoleAliasPathParams;
    headers: DeleteRoleAliasHeaders;
}
export declare class DeleteRoleAliasResponse extends SpeakeasyBase {
    contentType: string;
    deleteConflictException?: any;
    deleteRoleAliasResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    throttlingException?: any;
    unauthorizedException?: any;
}
