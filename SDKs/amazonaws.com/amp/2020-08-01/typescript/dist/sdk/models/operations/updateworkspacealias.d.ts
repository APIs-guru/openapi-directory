import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateWorkspaceAliasPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class UpdateWorkspaceAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWorkspaceAliasRequestBody extends SpeakeasyBase {
    alias?: string;
    clientToken?: string;
}
export declare class UpdateWorkspaceAliasRequest extends SpeakeasyBase {
    pathParams: UpdateWorkspaceAliasPathParams;
    headers: UpdateWorkspaceAliasHeaders;
    request: UpdateWorkspaceAliasRequestBody;
}
export declare class UpdateWorkspaceAliasResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
