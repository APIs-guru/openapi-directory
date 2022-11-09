import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteEnvironmentPathParams extends SpeakeasyBase {
    environmentId: string;
}
export declare class DeleteEnvironmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEnvironmentRequest extends SpeakeasyBase {
    pathParams: DeleteEnvironmentPathParams;
    headers: DeleteEnvironmentHeaders;
}
export declare class DeleteEnvironmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteEnvironmentResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
