import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteApplicationQueryParams extends SpeakeasyBase {
    clientToken?: string;
}
export declare class DeleteApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApplicationRequest extends SpeakeasyBase {
    pathParams: DeleteApplicationPathParams;
    queryParams: DeleteApplicationQueryParams;
    headers: DeleteApplicationHeaders;
}
export declare class DeleteApplicationResponse extends SpeakeasyBase {
    contentType: string;
    deleteApplicationResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
