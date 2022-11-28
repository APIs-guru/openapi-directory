import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWorkspaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateWorkspaceRequestBody extends SpeakeasyBase {
    alias?: string;
    clientToken?: string;
    tags?: Map<string, string>;
}
export declare class CreateWorkspaceRequest extends SpeakeasyBase {
    headers: CreateWorkspaceHeaders;
    request: CreateWorkspaceRequestBody;
}
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createWorkspaceResponse?: shared.CreateWorkspaceResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
