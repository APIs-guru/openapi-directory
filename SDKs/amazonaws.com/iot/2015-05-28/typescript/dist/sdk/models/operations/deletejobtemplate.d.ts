import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteJobTemplatePathParams extends SpeakeasyBase {
    jobTemplateId: string;
}
export declare class DeleteJobTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteJobTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteJobTemplatePathParams;
    headers: DeleteJobTemplateHeaders;
}
export declare class DeleteJobTemplateResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
