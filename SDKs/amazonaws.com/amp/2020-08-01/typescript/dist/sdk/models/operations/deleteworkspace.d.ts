import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWorkspacePathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class DeleteWorkspaceQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteWorkspaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspacePathParams;
    queryParams: DeleteWorkspaceQueryParams;
    headers: DeleteWorkspaceHeaders;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
