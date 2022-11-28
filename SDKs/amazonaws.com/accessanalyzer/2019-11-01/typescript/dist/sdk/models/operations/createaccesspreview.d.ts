import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccessPreviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAccessPreviewRequestBody extends SpeakeasyBase {
    analyzerArn: string;
    clientToken?: string;
    configurations: Map<string, shared.Configuration>;
}
export declare class CreateAccessPreviewRequest extends SpeakeasyBase {
    headers: CreateAccessPreviewHeaders;
    request: CreateAccessPreviewRequestBody;
}
export declare class CreateAccessPreviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createAccessPreviewResponse?: shared.CreateAccessPreviewResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
