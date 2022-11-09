import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDocumentationVersionPathParams extends SpeakeasyBase {
    docVersion: string;
    restapiId: string;
}
export declare class GetDocumentationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDocumentationVersionRequest extends SpeakeasyBase {
    pathParams: GetDocumentationVersionPathParams;
    headers: GetDocumentationVersionHeaders;
}
export declare class GetDocumentationVersionResponse extends SpeakeasyBase {
    contentType: string;
    documentationVersion?: shared.DocumentationVersion;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
